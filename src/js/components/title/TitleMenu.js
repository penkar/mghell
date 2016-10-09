import React, { PropTypes, Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { lineSkipAction } from '../../actions/index'
import TitleChapter from './TitleChapter'

const mapStateToProps = (state) => {
  return {
    chapters: state.chapterReducer,
    oneLine: state.utilityReducer.oneLine,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeLine: bindActionCreators(lineSkipAction, dispatch),
  }
}

const styles = {
  titleblock: {
    backgroundColor:'lightgray',
    border:'1px solid',
    fontSize:'5vh',
    textAlign:'left',
  },
  ul:{
    listStyle:'none',
  },
  list: {

  },
  point:{
    listStyleType:'none',
  },
}

class TitleMenu extends Component {
  static propTypes = {
    toggleMenu: PropTypes.func,
  }

  constructor(props){
    super(props);
  }

  chapters(){
    let { changeLine, chapters, oneLine } = this.props;
    let props = { changeLine, oneLine};
    if(!chapters){
      return null;
    }
    return chapters.map((data) => {
      return <TitleChapter data={data} {...props} key={data.index}  />
    });
  }

  render(){
    return(
      <div style={styles.titleblock} >
        <ul style={styles.ul} >
          {::this.chapters()}
        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TitleMenu);
