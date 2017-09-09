import React, { Component, PropTypes } from 'react'
import TitleMenu from './title/TitleMenu'
import Filter from './title/Filter'

export default class Title extends Component {
  static propTypes = {
    filter: PropTypes.bool,
  }

  constructor(props){
    super(props);
    this.state = {menu:false}
  }

  toggleMenu(){
    this.setState({menu: !this.state.menu})
  }

  render(){
    return (
      <div className='title-component'>
        <div className='title'>METAL GEAR HELL</div>
        <Filter classname='input' filterbool={this.props.filter}/>
        <div className='menu' onClick={ ::this.toggleMenu }>
          <span>Navigate</span>
          { this.state.menu && <TitleMenu toggleMenu={ ::this.toggleMenu } /> }
        </div>
      </div>
    );
  }
}
