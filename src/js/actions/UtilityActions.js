import { RESIZE_CONST, SCROLL_CONST} from '../constants/index.js'

export function scrollAction(offset){
  return ({
    type: SCROLL_CONST,
    offset
  })
}

export function resizeAction(){
  let height = window.innerHeight, topOffset = window.pageYOffset;
  let oneLine = height / 25;
  let lineCount = Math.floor(topOffset / oneLine)
  let offset = Math.max(0, oneLine * (lineCount));
  let resize = {
    oneLine: (height / 25),
    height,
    offset,
    lineCount,
  }
  return ({
    type: RESIZE_CONST,
    resize
  })
}
