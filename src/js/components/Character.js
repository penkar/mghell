import React, { Component, PropTypes } from 'react'

export default class Character extends Component {
  static propTypes = {
    character: React.PropTypes.string
  }

  render(){
    return (
      <span>{this.props.character}</span>
    )
  }
}
