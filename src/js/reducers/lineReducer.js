'use strict'
import { RESET_LINE, CHANGE_LINE, RESIZE_CONST} from '../constants/index.js'

export default function lineReducer(state = 0, action){
  switch (action.type) {
    case RESIZE_CONST:
      return action.resize.lineCount
    case CHANGE_LINE:
      return action.line;
    case RESET_LINE:
      return 0;
    default:
      return state;
  }
}
