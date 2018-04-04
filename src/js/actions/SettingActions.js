import { RESIZE_FONT, FILTER_FIND, CHANGE_SETTING } from '../constants/index.js'

export const settingSizeAction = (size) => {
  size  = Math.min(Math.max(size, 20), 80);
  return ({type:RESIZE_FONT, size});
}

export const toggleFilterFind = (filter) => ({type:FILTER_FIND,filter,});
export const changeSetting = ({key, value}) => ({type:CHANGE_SETTING, key, value});
