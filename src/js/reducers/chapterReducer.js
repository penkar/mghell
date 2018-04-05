import * as actions from '../constants/index.js'

export default function chapterReducer(state = [], action){
  switch (action.type) {
    case actions.CHANGE_CHAPTER:
      return action.line;
    case actions.SET_CHAPTERS:
      return action.chapters;
    case actions.ADD_CHAPTER:
      return 0;
    case actions.RESET_CHAPTER:
    default:
      return state;
  }
}
