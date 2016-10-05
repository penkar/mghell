import React, {Component, PropTypes} from 'react'
import smoothScroll from '../../utilities/smoothScroll';

export default class TitleChapter extends Component{
  static propTypes = {
    data: PropTypes.object,
    oneLine: PropTypes.number,
    changeLine: PropTypes.func,
  }

  constructor(props){
    super(props);
  }

  scroll(){
    let {data, oneLine, changeLine} = this.props;
    smoothScroll(oneLine * data.line);
  }

  render(){
    let { data } = this.props;
    return (<li onClick={ ::this.scroll } key={data.index}>{data.title}</li>);
  }
}
