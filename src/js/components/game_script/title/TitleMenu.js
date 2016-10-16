import React, { PropTypes, Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { lineSkipAction, settingSizeAction } from '../../../actions/index'
import TitleChapter from './TitleChapter'

const mapStateToProps = (state) => {
  return {
    chapters: state.chapterReducer,
    oneLine: state.utilityReducer.oneLine,
    settings: state.settingReducer,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    sizeAction: bindActionCreators(settingSizeAction, dispatch),
    changeLine: bindActionCreators(lineSkipAction, dispatch),
  }
}

const styles = {
  titleblock: {
    backgroundColor:'#844c4c',
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

  zoomOut(){
    let{ fontSize } = this.props.settings;
    this.props.sizeAction(fontSize + 4);
  }

  zoomIn(){
    let{ fontSize } = this.props.settings;
    this.props.sizeAction(fontSize - 4);
  }

  render(){
    return(
      <div style={styles.titleblock} >
        <ul style={styles.ul} >
          <li>
            <span onClick={::this.zoomIn}>+</span>
            &nbsp;Zoom&nbsp;
            <span onClick={::this.zoomOut}>-</span>
          </li>
          {::this.chapters()}
        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TitleMenu);
