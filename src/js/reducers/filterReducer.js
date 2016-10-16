import { FILTER_CHARACTER, FILTER_TERM } from '../constants/index';

const initial = {
  filter: '',
  name: '',
}

export default function filterReducer(state = initial, action){
  switch (action.type) {
    case FILTER_TERM:
      return Object.assign({}, state, {filter: action.term});
    case FILTER_CHARACTER:
      return Object.assign({}, state, {name: action.term});
    default:
      return state;
  }
}
