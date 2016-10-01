import React, { Component, PropTypes } from 'react'
import ChapterTitle from '../components/ChapterTitle';
import Dialog from '../components/Dialog';
import { connect } from 'react-redux'

import MGS from '../../script/mgs.json';

const mapStateToProps = (state) => {
  return (state);
}

class Chapters extends Component{
  constructor(props){
    super(props)
    this.state = {
      height:window.innerHeight,
      topOffset:0,
      offset:0,
    }
  }

  mgsDialogues(){
    let chapterLines = [], count = 0, { lineSkip } = this.props;
    for(var j = 0; j < MGS.length; j++){
      let data = MGS[j];
      let dialog = data.dialog;
      count++
      if(count > lineSkip){
        chapterLines.push(<ChapterTitle title={data.title} key={`${j}_title`}/>);
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

  render(){ console.log(this.props);
    return(
      <div>
        { ::this.mgsDialogues() }
      </div>
    );
  }
}

export default connect(mapStateToProps)(Chapters)
