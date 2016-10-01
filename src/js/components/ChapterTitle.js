import React, { Component, PropTypes } from 'react';

let style = {
  titleStyle:{
    width:'100%',
    textAlign:'left',
    paddingLeft:'10px',
    color:'red',
  }
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
        Chapter {chapter}: {title}
      </div>
    )
  }
}

export default ChapterTitle;
