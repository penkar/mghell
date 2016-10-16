import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import Chapters from './Chapters';
import Title from '../components/game_script/Title';
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
    setting: state.settingReducer,
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
    let { fontSize } = this.props.setting;
    return (
      <div>
        <Title />
        <span style={{fontSize:`${100 / fontSize}vh`}}>
          <Chapters/>
        </span>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
