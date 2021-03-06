import * as actions from '../constants/index';

const initial = {
  filter: '',
  name: '',
}

export default function filterReducer(state = initial, action){
  switch (action.type) {
    case actions.FILTER_TERM:
      return Object.assign({}, state, {filter: action.term});
    case actions.FILTER_CHARACTER:
      let name = (state.name === action.term) ? '' : action.term;
      return Object.assign({}, state, {name});
    default:
      return state;
  }
}
