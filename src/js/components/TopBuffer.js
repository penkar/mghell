import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { lineSkipAction } from '../actions/Actions'

const mapDispatchToProps = (dispatch) => {
  return {
    lineSkipAction: bindActionCreators(lineSkipAction, dispatch)
  }
}

class TopBuffer extends Component {
  constructor(props){
    super(props);
    this.state = {
      height:window.innerHeight,
      oneLine: window.innerHeight / 25,
      topOffset: 0,
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
    let oneLine = window.innerHeight / 25, height = window.innerHeight;
    this.setState({oneLine, height});
  }

  scroll(){//console.log(this.state.offset);
    let { height, oneLine } = this.state
    let topOffset = window.pageYOffset;
    let { lineSkipAction } = this.props;
    let lineCount = Math.floor( topOffset / oneLine );
    let offset = Math.max(0, lineCount * oneLine);
    lineSkipAction(lineCount);
    this.setState({offset});
  }

  render(){
    return <div style={{height:`${this.state.offset}px`}}></div>;
  }
}

export default connect(undefined, mapDispatchToProps)(TopBuffer)
