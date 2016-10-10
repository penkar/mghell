import React, {PropTypes, Component} from 'react'
import { connect } from 'react-redux'
import { filterTerm } from '../../actions/index'
import { bindActionCreators } from 'redux';

const mapDispatchToProps = (dispatch) => {
  return {
    filter: bindActionCreators(filterTerm, dispatch)
  }
}

const styles = {
  input: {
    backgroundColor:'transparent',
  },
}

class Filter extends Component{
  change(e){
    this.props.filter(e.target.value);
  }

  render(){
    return(
      <input onChange={::this.change} style={styles.input}></input>
    )
  }
}

export default connect(undefined, mapDispatchToProps)(Filter)
