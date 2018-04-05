import * as actions from '../constants/index.js'

export default function lineReducer(state = 0, action){
  switch (action.type) {
    case actions.RESIZE_CONST:
      return action.resize.lineCount
    case actions.CHANGE_LINE:
      return action.line;
    case actions.RESET_LINE:
      return 0;
    default:
      return state;
  }
}
