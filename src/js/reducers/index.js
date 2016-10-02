'use strict'
import { combineReducers } from 'redux'
import chapterReducer from './chapterReducer'
import filterReducer from './filterReducer'
import lineReducer from './lineReducer'
import utilityReducer from './utilityReducer'

const mghellStore = combineReducers({
  chapterReducer,
  filterReducer,
  lineReducer,
  utilityReducer,
});

export default mghellStore
