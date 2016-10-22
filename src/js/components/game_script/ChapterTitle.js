import React, { Component, PropTypes } from 'react';

let style = {
  titleStyle:{
    margin:'0px',
    textAlign:'left',
    paddingLeft:'10px',
    color:'#9c1212',
    backgroundColor:'lightslategrey',
  },
  title:{
    marginLeft:'10px',
  },
}

class ChapterTitle extends Component {
  static propTypes = {
    title: PropTypes.string,
    chapter: PropTypes.number
  }

  render(){
    let {title, chapter} = this.props;
    return (
      <div style={style.titleStyle}>
        Chapter {chapter}: <span style={style.title}>{title}</span>
      </div>
    )
  }
}

export default ChapterTitle;
