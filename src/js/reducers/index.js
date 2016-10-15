'use strict'
import { combineReducers } from 'redux'
import chapterReducer from './chapterReducer'
import filterReducer from './filterReducer'
import lineReducer from './lineReducer'
import settingReducer from './settingReducer'
import utilityReducer from './utilityReducer'

const mghellStore = combineReducers({
  chapterReducer,
  filterReducer,
  lineReducer,
  settingReducer,
  utilityReducer,
});

export default mghellStore
