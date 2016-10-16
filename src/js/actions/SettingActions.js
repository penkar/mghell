import { RESIZE_FONT } from '../constants/index.js'

export function settingSizeAction(size){
  size  = Math.min(Math.max(size, 20), 80)
  return ({
    type:RESIZE_FONT,
    size
  });
}
