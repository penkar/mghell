import { CHANGE_CHAPTER, ADD_CHAPTER, RESET_CHAPTER } from '../constants/index.js'

export default function chapterReducer(state = [], action){
  switch (action.type) {
    case CHANGE_CHAPTER:
      return action.line;
    case ADD_CHAPTER:
      return 0;
    case RESET_CHAPTER:
    default:
      return state;
  }
}
