'use strict'
import { combineReducers } from 'redux'
import lineReducer from './lineReducer'
import chapterReducer from './chapterReducer'
import filterReducer from './filterReducer'

const mghellStore = combineReducers({
  chapterReducer,
  filterReducer,
  lineReducer,
});

export default mghellStore
