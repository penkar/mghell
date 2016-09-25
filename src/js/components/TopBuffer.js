import React, { Component, PropTypes } from 'react';

export default class TopBuffer extends Component {
  constructor(props){
    super(props);
    this.state = {
      height:window.innerHeight,
      topOffset: window.pageYOffset,
      offset: 0,
    }
  }

  componentWillMount(){
    window.addEventListener('reseize', ::this.resize);
    window.addEventListener('scroll', ::this.scroll);
  }

  componentWillUnmount(){
    window.removeEventListener('resize', ::this.resize);
    window.removeEventListener('scroll', ::this.scroll);
  }

  resize(){
    let height = window.innerHeight;
    this.setState({height});
  }

  scroll(){
    let topOffset = window.pageYOffset;
    let offset = Math.max(0, topOffset / this.state.height * 100);
    this.setState({offset, topOffset});
  }

  height(){
    let { topOffset, offset, height } = this.state;
    let oneLine = height / 25;
    return Math.max(0, Math.floor( topOffset / oneLine ) * oneLine );
  }

  render(){
    return (<div style={{height:`${::this.height()}px`}}></div>);
  }
}
