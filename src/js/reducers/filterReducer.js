import { FILTER_CHARACTER, FILTER_TERM } from '../constants/index';

export default function filterReducer(state = "", action){
  switch (action.type) {
    case FILTER_TERM:
      return action.term;
    case FILTER_CHARACTER:
      return action.character;
    default:
      return state;
  }
}
