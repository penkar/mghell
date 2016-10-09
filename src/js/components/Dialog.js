import React, {PropTypes, Component} from 'react'
import Character from './Character';
import Line from './Line';


class Dialog extends Component{
  static propTypes = {
    data: PropTypes.object,
    idx: PropTypes.string,
  }

  constructor(props){
    super(props);
  }

  render(){
    let { character, line } = this.props.data;
    let bool = character !== 'action';
    return(
      <div key={this.props.idx} className="dialog">
        {Character(character)}
        {Line(line, !bool)}
      </div>
    )
  }
}

export default Dialog;
