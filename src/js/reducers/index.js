'use strict'
import { combineReducers } from 'redux'
import lineReducer from './lineReducer'

const mghellStore = combineReducers({
  lineReducer,
});

export default mghellStore
