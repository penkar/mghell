import React, { Component, PropTypes } from 'react';

let style = {
  titleStyle:{
    width:'100%',
    textAlign:'left',
    paddingLeft:'10px',
    color:'#9c1212',
  },
  title:{
    fontFamily:'MGS1',
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
