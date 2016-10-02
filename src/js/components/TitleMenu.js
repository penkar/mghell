import React, { PropTypes, Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { lineSkipAction } from '../actions/index'

const mapStateToProps = (state) => {
  return {
    chapters: state.chapterReducer,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeLine: bindActionCreators(lineSkipAction, dispatch),
  }
}



const styles = {
  titleblock: {
    border:'1px solid',
    fontSize:'5vh',
    textAlign:'left',
  },
  list: {

  },
  point:{
    listStyleType:'none'
  }
}

class TitleMenu extends Component {
  static propTypes = {
    toggleMenu: PropTypes.func,
  }

  constructor(props){
    super(props);
  }

  chapters(){
    if(!this.props.chapters){
      return null;
    }
    return this.props.chapters.map((data) => {
      return (<li onClick={() => {this.props.changeLine(data.line)}} key={data.index}>{data.title}</li>);
    });
  }

  render(){
    return(
      <div style={styles.titleblock} >
        <ul>
          {::this.chapters()}
        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TitleMenu);
