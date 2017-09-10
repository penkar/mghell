import { RESIZE_FONT, FILTER_FIND, CHANGE_SETTING, } from '../constants/index.js'
const initial = {
  fontSize:40,
  filter: true,
  navigate: false,
}

export default function settingReducer(state = initial, action){
  switch (action.type) {
    case CHANGE_SETTING:
      return Object.assign({}, state, {[action.key]: action.value})
    case RESIZE_FONT:
      return Object.assign({}, state, {fontSize: action.size});
    case FILTER_FIND:
      return Object.assign({}, state, {filter: action.filter});
    default:
      return state;
  }
}
