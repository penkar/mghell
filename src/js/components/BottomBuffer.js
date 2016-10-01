import React, {PropTypes, Component} from 'react'

export default class BottomBuffer extends Component{
  static propTypes = {
    count: PropTypes.number
  }
  constructor(props){
    super(props);
    this.state = {
      oneLine:(window.innerHeight/25)
    }
  }
  render(){
    let count = this.props.count || 100;
    return (
      <div style={{marginTop: count * this.state.oneLine}}>
      </div>
    )
  }
}
