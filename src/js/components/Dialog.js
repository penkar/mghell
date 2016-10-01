import React, {PropTypes, Component} from 'react'
import Character from './Character';
import Line from './Line';


class Dialog extends Component{
  static propTypes = {
    data: PropTypes.object
  }

  constructor(props){
    super(props);
  }

  render(){
    let { data } = this.props;
    return(
      <div>
        <Character character={data.character} />
        <Line line={data.line}/>
      </div>
    )
  }
}

export default Dialog;
