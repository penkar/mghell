import React, { Component, PropTypes } from 'react'
import Chapters from './Chapters';
import TopBuffer from '../components/TopBuffer';
import BottomBuffer from '../components/BottomBuffer';
import Title from '../components/Title';


import { connect } from 'react-redux'
const mapStateToProps = (state) => {
  return (state);
}

class App extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <Title />
        <TopBuffer />
        <span style={{fontSize:'4vh'}}>
        <Chapters />
        </span>
        <BottomBuffer />
      </div>
    )
  }
}

export default connect(mapStateToProps)(App)
