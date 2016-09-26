'use strict'
import { RESET, CHANGE_LINE} from '../constants/index.js'

export default function lineSkip(state = 0, action){
  switch (action.type) {
    case CHANGE_LINE:
      return action.line;
    case RESET:
      return 0;
    default:
      return state;
  }
}
