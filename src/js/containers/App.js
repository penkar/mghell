import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import Chapters from './Chapters';
import {Title} from '../components/game_script';

import * as actions from '../actions'

const mapDispatchToProps = (dispatch) => ({
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
});

const mapStateToProps = (state) => ({
  offset: state.utilityReducer,
  lineReducer: state.lineReducer,
  settings: state.settingReducer,
  chapters: state.chapterReducer,
  oneLine: state.utilityReducer.oneLine,
  filter: state.settingReducer.filter,
  fontSize: state.settingReducer.fontSize,
});

class App extends Component{
  componentDidMount(){
    window.addEventListener('resize', this._resize);
    window.addEventListener('scroll', this._resize);
    this.props.actions.resizeAction();
  }

  render = () => (
    <div>
      { Title({...this.props }) }
      <span style={{fontSize:`${100 / this.props.fontSize}vh`}}>
        <Chapters/>
      </span>
    </div>
  )

  _resize = () => this.props.actions.resizeAction();
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
