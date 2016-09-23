import React, { Component, PropTypes } from 'react';

class ChapterTitle extends Component {
  static propTypes = {
    title: PropTypes.string
  }

  render(){
    return (
      <div>{this.props.title}</div>
    )
  }
}

export default ChapterTitle;
