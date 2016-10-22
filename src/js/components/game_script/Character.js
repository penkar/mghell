import React, { Component, PropTypes } from 'react'
const style = {
  div:{
    cursor:'pointer',
  },
}

class Character extends Component{
  static propTypes = {
    bool: PropTypes.bool,
    character: PropTypes.string,
    filterCharacter: PropTypes.func,
  }

  click(){
    let { filterCharacter, character } = this.props;
    filterCharacter(character);
  }

  render(){
    let { bool, character, filterCharacter } = this.props;
    return <div onClick={::this.click} style={style.div}>{bool && character}</div>
  }
}

export default Character
