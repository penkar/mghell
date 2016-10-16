import { RESIZE_FONT } from '../constants/index.js'
const initial = {
  fontSize:40,
}

export default function settingReducer(state = initial, action){
  switch (action.type) {
    case RESIZE_FONT:
      return Object.assign({}, state, {fontSize: action.size});
    default:
      return state;
  }
}
