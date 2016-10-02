'use strict'
import { RESET_LINE, CHANGE_LINE} from '../constants/index.js'

export default function lineReducer(state = 0, action){
  switch (action.type) {
    case CHANGE_LINE:
      return action.line;
    case RESET_LINE:
      return 0;
    default:
      return state;
  }
}
