import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import Chapters from './Chapters';
import {Title} from '../components/game_script';

import * as actions from '../actions'

function mapDispatchToProps(dispatch) {
  return {
    actions:{
      filter: bindActionCreators(actions.filterTerm, dispatch),
      lineSkipAction: bindActionCreators(actions.lineSkipAction, dispatch),
      resizeAction: bindActionCreators(actions.resizeAction, dispatch),
      toggleFilterFind: bindActionCreators(actions.toggleFilterFind, dispatch),
      settingSizeAction: bindActionCreators(actions.settingSizeAction, dispatch),
      lineSkipAction: bindActionCreators(actions.lineSkipAction, dispatch),
      changeSetting: bindActionCreators(actions.changeSetting, dispatch),
    },
    dispatch,
  }
}

function mapStateToProps(state) {
  return {
    offset: state.utilityReducer,
    lineReducer: state.lineReducer,
    settings: state.settingReducer,
    chapters: state.chapterReducer,
    oneLine: state.utilityReducer.oneLine,
  };
}

class App extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    window.addEventListener('resize', ::this.resize);
    window.addEventListener('scroll', ::this.resize);
    this.props.actions.resizeAction();
  }

  resize(){
    this.props.actions.resizeAction();
  }

  render(){
    let {settings, actions, chapters, oneLine} = this.props;
    let { fontSize, filter } = this.props.settings;
    return (
      <div>
        { Title({settings, filter, actions, chapters, oneLine}) }

        <span style={{fontSize:`${100 / fontSize}vh`}}>
          <Chapters/>
        </span>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
