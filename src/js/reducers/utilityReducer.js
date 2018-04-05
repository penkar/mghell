import * as actions from '../constants/index.js'

const initial = {
  offset: 0,
  oneLine: window.innerHeight / 25,
  height: window.innerHeight,
}

export default function utilityReducer(state = initial, action){
  switch (action.type) {
    case actions.CHANGE_LINE:
      return Object.assign({}, state, action.utilities);
    case actions.SCROLL_CONST:
      return Object.assign({}, state, action.scroll);
    case actions.RESIZE_CONST:
      return Object.assign({}, state, action.resize);;
    default:
      return state;
  }
}
