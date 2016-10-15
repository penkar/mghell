import { RESIZE_FONT } from '../constants/index.js'

export function settingSizeAction(size){
  return ({
    type:RESIZE_FONT,
    size
  });
}
