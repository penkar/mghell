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
    let { data } = this.props;
    return(
      <div key={this.props.idx}>
        <Character character={data.character} />
        <Line line={data.line}/>
      </div>
    )
  }
}

export default Dialog;
