import React, { Component, PropTypes } from 'react'
import Chapter from '../components/Chapter';
import Title from '../components/Title';
import MGS from '../../script/mgs.json';

export default class App extends Component{
  mgsDialogues(){
    return MGS.map((data, idx) => <Chapter dialog={data} key={idx}/>);
  }

  render(){
    return (
      <div>
        <Title />
      </div>
    )
    // {::this.mgsDialogues()}
  }
}
