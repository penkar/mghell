import React, { Component } from 'react'
const style = {
  header:{
    width:'95%',
    fontSize:'32px',
    position:'fixed',
    top:'0px',
  },
  title:{
    position:'absolute',
    left:'0px',
  },
  menu:{
    position:'absolute',
    right:'0px',
  }
}

export default class Title extends Component {
  render(){
    return (
      <div style={style.header}>
        <div style={style.title}>METAL GEAR HELL</div>
        <div style={style.menu}>MENU</div>
      </div>
    );
  }
}
