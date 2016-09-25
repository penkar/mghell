import React, { Component, PropTypes } from 'react'
import Chapter from '../components/Chapter';
import TopBuffer from '../components/TopBuffer';
import Title from '../components/Title';
import MGS from '../../script/mgs.json';
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

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      height:window.innerHeight,
      topOffset:0,
      offset:0,
    }
  }

  report(count){

  }

  mgsDialogues(){
    console.log(this.state);
    return <Chapter dialog={MGS[0]} key={0} offset={this.state.offset} report={::this.report} index={1}/>;
    // return MGS.map((data, idx) => <Chapter dialog={data} key={idx} report={::this.report} index={idx}/>);
  }

  render(){
    return (
      <div>
        <Title />
        <TopBuffer />
        <span style={{fontSize:'4vh'}}>
          {::this.mgsDialogues()}
        </span>
      </div>
    )
    // <TopBuffer height={this.state.height} offset={this.state.topOffset} />
  }
}
