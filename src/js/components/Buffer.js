import React, { Component, PropTypes } from 'react';

export default class Buffer extends Component {
  constructor(props){
    super(props);
  }
  static propTypes = {
    height: PropTypes.number
  }

  render(){
    return (<div style={{height:this.props.height}}></div>);
  }
}
