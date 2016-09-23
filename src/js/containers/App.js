import React, { Component, PropTypes } from 'react'
import Chapter from '../components/Chapter';
import MGS from '../../script/mgs.json';

// const MGS = JSON.parse(mgs);

export default class App extends Component{
  mgsDialogues(){
    return MGS.map((data, idx) => <Chapter dialog={data} key={idx}/>);
  }

  render(){
    return <div>{::this.mgsDialogues()}</div>
  }
}
