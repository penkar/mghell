'use strict'
import { RESIZE_CONST, SCROLL_CONST, CHANGE_LINE} from '../constants/index.js'

const initial = {
  offset: 0,
  oneLine: window.innerHeight / 25,
  height: window.innerHeight,
}

export default function utilityReducer(state = initial, action){
  switch (action.type) {
    case CHANGE_LINE:
      return Object.assign({}, state, action.utilities);
    case SCROLL_CONST:
      return Object.assign({}, state, action.scroll);
    case RESIZE_CONST:
      return Object.assign({}, state, action.resize);;
    default:
      return state;
  }
}
