import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import ChapterTitle from '../components/ChapterTitle';
import Dialog from '../components/Dialog';
import { jsonChapterLoad } from '../utilities/onload';
import { setChapters } from '../actions/index'

import MGS from '../../script/mgs.json';

const mapStateToProps = (state) => {
  return {
    offset: state.utilityReducer,
    lineSkip: state.lineReducer,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
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
    chapters.forEach((data) => {total += data.line});
    this.props.setChapters(chapters);
    this.setState({total})
  }

  mgsDialogues(){
    let chapterLines = [], count = 0, { lineSkip } = this.props;
    for(var j = 0; j < MGS.length; j++){
      let data = MGS[j];
      let dialog = data.dialog;
      count++
      if(count > lineSkip){
        chapterLines.push(<ChapterTitle title={data.title} key={`${j}_title`} chapter={j}/>);
      }
      for(var i = 0; i < dialog.length; i++ ){
        let line = dialog[i];
        count++
        if(count > lineSkip){
          chapterLines.push(<Dialog data={line} key={`${j}_${i}`} />);
        }
        if(chapterLines.length > 30){
          return chapterLines;
        }
      }
    }
    return chapterLines;
  }

  style(){
    let { lineSkip, offset } = this.props, { total } = this.state;
    let { oneLine } = offset;
    return({
      paddingTop:`${ Math.min(offset.offset + 32, total * oneLine) }px`,
      paddingBottom:`${ Math.min(total - offset.lineCount, 500) * oneLine }px`,
    });
  }

  render(){
    return(
      <div style={ ::this.style() } >
        { ::this.mgsDialogues() }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chapters)
