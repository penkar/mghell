import React, { Component, PropTypes } from 'react'
import Chapters from './Chapters';
import TopBuffer from '../components/TopBuffer';
import BottomBuffer from '../components/BottomBuffer';
import Title from '../components/Title';


import { connect } from 'react-redux'
const mapStateToProps = (state) => {
  return (state);
}

// 20928

let mgs = [
  {1: 241, filtered:0, viewed:0},
  {2: 494, filtered:0, viewed:0},
  {3: 1024, filtered:0, viewed:0},
  {4: 1631, filtered:0, viewed:0},
  {5: 1722, filtered:0, viewed:0},
  {6: 1798, filtered:0, viewed:0},
  {7: 1866, filtered:0, viewed:0},
  {8: 2196, filtered:0, viewed:0},
  {9: 2283, filtered:0, viewed:0},
  {10: 2403, filtered:0, viewed:0},
  {11: 2550, filtered:0, viewed:0},
  {12: 2720, filtered:0, viewed:0},
]

class App extends Component{
  constructor(props){
    super(props);
  }

  render(){console.log(this.props);
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
