import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import * as actions from '../actions'
import {Title} from '../components/game_script';
import {ChapterTitle, Dialog} from '../components/game_script';
import { jsonChapterLoad } from '../utilities/onload';

import MGS from '../../script/mgs.json';

const mapDispatchToProps = (dispatch) => ({
  filterCharacter: bindActionCreators(actions.filterCharacter, dispatch),
  setChapters: bindActionCreators(actions.setChapters, dispatch),
  actions:{
    changeSetting: bindActionCreators(actions.changeSetting, dispatch),
    filter: bindActionCreators(actions.filterTerm, dispatch),
    lineSkipAction: bindActionCreators(actions.lineSkipAction, dispatch),
    resizeAction: bindActionCreators(actions.resizeAction, dispatch),
    settingSizeAction: bindActionCreators(actions.settingSizeAction, dispatch),
    toggleFilterFind: bindActionCreators(actions.toggleFilterFind, dispatch),
  },
  dispatch,
});

const mapStateToProps = (state) => ({
  offset: state.utilityReducer,
  lineReducer: state.lineReducer,
  settings: state.settingReducer,
  chapters: state.chapterReducer,
  oneLine: state.utilityReducer.oneLine,
  filter: state.settingReducer.filter,
  fontSize: state.settingReducer.fontSize,

  filterReducer: state.filterReducer,
  lineSkip: state.lineReducer,
  size: state.settingReducer.fontSize,
  findFilter: state.settingReducer.filter,
});

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {total:0,};
  }

  componentWillMount(){
    let chapters = jsonChapterLoad(MGS), total = 0;
    chapters.forEach((data) => {
      total = data.end
    });
    this.props.setChapters(chapters);
    this.setState({total})
  }

  componentDidMount(){
    window.addEventListener('resize', this._resize);
    window.addEventListener('scroll', this._resize);
    this.props.actions.resizeAction();
  }

  render(){ 
    return (
      <div>
        { Title({...this.props }) }

        <span style={{fontSize:`${100 / this.props.fontSize}vh`}}>
          <div key={this.props.size} style={ this._style() } >
            { this.props.findFilter && this._filterLines() }
            { !this.props.findFilter && this._findLines() }
          </div>
        </span>
      </div>
    )
  }

  _findLines = () => {
    let chapterLines = [], count = 0, { lineSkip, filterCharacter } = this.props, filter = this.props.filterReducer;
    let regex = new RegExp(filter, 'i'), renderLines = 50;

    for( var j = 0; j < MGS.length; j++ ){
      if(chapterLines.length > renderLines) break;

      let data = MGS[j];
      let dialog = data.dialog;
      if(lineSkip > (count + dialog.length)){console.log('count', count);
        count += (dialog.length + 1);
        continue;
      } else {
        for( var i = (lineSkip - count); i < dialog.length; i++){
          count++
          if ( count < lineSkip ) continue;
          if ( chapterLines.length > renderLines ) break;

          let conv = dialog[i];
          if(!chapterLines.length || conv.line.search(regex) !== -1){
            chapterLines.push( Dialog({filterCharacter, data:conv, key:`${j}_${i}_${count}`}) );
          }
        }
      }
    }
    return chapterLines;
  }

  _filterLines = () => {
    let chapterLines = [], count = 0, { lineSkip, filterCharacter } = this.props, { filter, name } = this.props.filter;
    let regex = new RegExp(filter, 'i'), renderLines = 50;
    for(var j = 0; j < MGS.length; j++){
      if(chapterLines.length > renderLines) break;

      let data = MGS[j];
      let dialog = data.dialog;
      count++
      if(count > lineSkip){
        chapterLines.push( ChapterTitle({title: data.title, key:`${j}_title${count}`, chapter:j}) );
      }
      for(var i = 0; i < dialog.length; i++ ){
        let conv = dialog[i];

        if(filter && conv.line.search(regex) === -1) continue;
        if(name && conv.character !== name) continue;

        count++
        if(chapterLines.length > renderLines){
          break;
        } else if(count > lineSkip){
          chapterLines.push( Dialog({filterCharacter, data:conv, ids:`${j}_${i}_${count}`, key:`${j}_${i}_${count}`}) );
        }
      }
    }
    return chapterLines;
  }

  _style = () => {
    let { lineSkip, offset } = this.props, { total } = this.state;
    let { oneLine } = offset;
    return({
      paddingTop:`${ Math.min(offset.offset + 70, total * oneLine) }px`,
      paddingBottom:`${ Math.min(total - offset.lineCount, 500) * oneLine }px`,
    });
  }

  _resize = () => this.props.actions.resizeAction();
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
