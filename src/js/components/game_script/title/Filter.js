import React, {PropTypes, Component} from 'react'
import { connect } from 'react-redux'
import { filterTerm, toggleFilterFind } from '../../../actions/index'
import { bindActionCreators } from 'redux';

const mapDispatchToProps = (dispatch) => {
  return {
    filter: bindActionCreators(filterTerm, dispatch),
    toggleFilter: bindActionCreators(toggleFilterFind, dispatch),
  }
}

class Filter extends Component{
  static propTypes = {
    filterbool: PropTypes.bool,
  }

  change(e){
    this.props.filter(e.target.value);
  }

  toggle(){
    this.props.toggleFilter(!this.props.filterbool);
  }

  render(){
    return(
      <span>
        <input onChange={::this.change} className={this.props.classname}></input>
        <span className='filter-button' onClick={ ::this.toggle }>
          {this.props.filterbool && "Filter" || "Find Next"}
        </span>
      </span>
    )
  }
}

export default connect(undefined, mapDispatchToProps)(Filter)
