import { RESIZE_FONT, FILTER_FIND } from '../constants/index.js'
const initial = {
  fontSize:40,
  filter: false,
}

export default function settingReducer(state = initial, action){
  switch (action.type) {
    case RESIZE_FONT:
      return Object.assign({}, state, {fontSize: action.size});
    case FILTER_FIND:
      return Object.assign({}, state, {filter: action.filter});
    default:
      return state;
  }
}
