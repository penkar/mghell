import { RESIZE_FONT, FILTER_FIND, CHANGE_SETTING } from '../constants/index.js'

export function settingSizeAction(size){
  size  = Math.min(Math.max(size, 20), 80)
  return ({type:RESIZE_FONT,size});
}

export function toggleFilterFind(filter){
  return ({type:FILTER_FIND,filter,});
}

export function changeSetting({key, value}) {
  return ({type:CHANGE_SETTING, key, value});
};
