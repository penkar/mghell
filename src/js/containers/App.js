import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import Chapters from './Chapters';
import Title from '../components/Title';
import TopBuffer from '../components/TopBuffer';
import BottomBuffer from '../components/BottomBuffer';
import { lineSkipAction, resizeAction } from '../actions/index'

const mapDispatchToProps = (dispatch) => {
  return {
    lineSkipAction: bindActionCreators(lineSkipAction, dispatch),
    resizeAction: bindActionCreators(resizeAction, dispatch),
  }
}

const mapStateToProps = (state) => {
  return {
    offset: state.utilityReducer,
    lineReducer: state.lineReducer,
  };
}

class App extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    window.addEventListener('resize', ::this.resize);
    window.addEventListener('scroll', ::this.resize);
    this.props.resizeAction();
  }

  resize(){
    this.props.resizeAction();
  }

  render(){
    return (
      <div>
        <Title />
        { TopBuffer(this.props.offset.offset) }
        <span style={{fontSize:'4vh'}}>
        <Chapters />
        </span>
        <BottomBuffer />
      </div>
    )
  }
}
// <TopBuffer line={this.props.lineReducer} offset={this.props.offset}/>

export default connect(mapStateToProps, mapDispatchToProps)(App)
