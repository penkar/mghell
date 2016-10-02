import React, { Component } from 'react'
import TitleMenu from './TitleMenu'

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
    cursor:'pointer',
    textAlign:'right',
    position:'absolute',
    right:'0px',
  },
}

export default class Title extends Component {
  constructor(props){
    super(props);
    this.state = {menu:false}
  }

  toggleMenu(){
    this.setState({menu: !this.state.menu})
  }

  render(){
    return (
      <div style={style.header}>
        <div style={style.title}>METAL GEAR HELL</div>
        <div style={style.menu} onClick={ ::this.toggleMenu }>
          <span>View Options</span>
          { this.state.menu && <TitleMenu toggleMenu={::this.toggleMenu} /> }
        </div>
      </div>
    );
  }
}
