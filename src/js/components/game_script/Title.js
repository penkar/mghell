import React, { Component } from 'react'
import TitleMenu from './title/TitleMenu'
import Filter from './title/Filter'

const style = {
  header:{
    width:'100%',
    backgroundColor:'black',
    fontSize:'32px',
    position:'fixed',
    top:'0px',
    height:'70px',
  },
  title:{
    textAlign:'center',
    position:'absolute',
    left:'35px',
    fontFamily:"MGS1",
    color:'#f44336',
    paddingTop:'15px',
  },
  menu:{
    cursor:'pointer',
    textAlign:'right',
    position:'absolute',
    right:'35px',
    top:'15px',
  },
  input: {
    marginLeft:'400px',
    color:'gray',
    backgroundColor:'transparent',
    marginTop:'15px',
    height:'23px',
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
        <Filter style={style.input} />
        <div style={style.menu} onClick={ ::this.toggleMenu }>
          <span>Navigate</span>
          { this.state.menu && <TitleMenu toggleMenu={ ::this.toggleMenu } /> }
        </div>
      </div>
    );
  }
}
