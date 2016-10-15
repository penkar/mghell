import { RESIZE_FONT } from '../constants/index.js'

export default function settingReducer(state = 25, action){
  switch (action.type) {
    case RESIZE_FONT:
      return action.size
    default:
      return state;
  }
}
