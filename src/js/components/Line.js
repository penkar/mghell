import React, { Component, PropTypes } from 'react'

export default class Line extends Component {
  static propTypes = {
    line: React.PropTypes.string
  }

  render(){
    return (
      <span>{this.props.line}</span>
    )
  }
}
