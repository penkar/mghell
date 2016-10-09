import React, { Component, PropTypes } from 'react'

export default class Character extends Component {
  static propTypes = {
    character: React.PropTypes.string
  }

  render(){
    return (
      <div>{this.props.character}</div>
    )
  }
}
