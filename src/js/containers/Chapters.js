import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import ChapterTitle from '../components/game_script/ChapterTitle';
import Dialog from '../components/game_script/Dialog';
import { jsonChapterLoad } from '../utilities/onload';
import { setChapters, filterCharacter } from '../actions/index'

import MGS from '../../script/mgs.json';

const mapStateToProps = (state) => {
  return {
    filter: state.filterReducer,
    offset: state.utilityReducer,
    lineSkip: state.lineReducer,
    size: state.settingReducer.fontSize,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    filterCharacter: bindActionCreators(filterCharacter, dispatch),
    setChapters: bindActionCreators(setChapters, dispatch),
  }
}

class Chapters extends Component{
  constructor(props){
    super(props)
    this.state = {
      total:0
    }
  }

  componentWillMount(){
    let chapters = jsonChapterLoad(MGS), total = 0;
    chapters.forEach((data) => {
      total = data.end
    });
    this.props.setChapters(chapters);
    this.setState({total})
  }

  mgsDialogues(){
    let chapterLines = [], count = 0, { lineSkip, filterCharacter } = this.props, { filter, name } = this.props.filter;
    let regex = new RegExp(filter, 'i'), renderLines = 50;
    for(var j = 0; j < MGS.length; j++){
      if(chapterLines.length > renderLines){
        break;
      }
      let data = MGS[j];
      let dialog = data.dialog;
      count++
      if(count > lineSkip){
        chapterLines.push(<ChapterTitle title={data.title} key={`${j}_title${count}`} chapter={j}/>);
      }
      for(var i = 0; i < dialog.length; i++ ){
        let conv = dialog[i];
        if(filter && conv.line.search(regex) === -1){
          continue;
        }
        if(name && conv.character !== name){
          continue;
        }
        count++
        if(chapterLines.length > renderLines){
          break;
        } else if(count > lineSkip){
          let props = {filterCharacter, data:conv, ids:`${j}_${i}_${count}`}
          chapterLines.push(<Dialog {...props} key={`${j}_${i}_${count}`} />);
        }
      }
    }
    return chapterLines;
  }

  style(){
    let { lineSkip, offset } = this.props, { total } = this.state;
    let { oneLine } = offset;
    return({
      paddingTop:`${ Math.min(offset.offset + 70, total * oneLine) }px`,
      paddingBottom:`${ Math.min(total - offset.lineCount, 500) * oneLine }px`,
    });
  }

  render(){
    return(
      <div key={this.props.size} style={ ::this.style() } >
        { ::this.mgsDialogues() }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chapters)
