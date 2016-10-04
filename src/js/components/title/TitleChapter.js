import React, {Component, PropTypes} from 'react'

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
    window.scrollTo(0, data.line * oneLine);
    changeLine(data.line);
  }

  render(){
    let { data } = this.props;
    return (<li onClick={ ::this.scroll } key={data.index}>{data.title}</li>);
  }
}
