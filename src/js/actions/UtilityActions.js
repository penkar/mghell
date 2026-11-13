import { RESIZE_CONST, SCROLL_CONST } from '../constants/index.js';

export const scrollAction = (offset) => ({
  type: SCROLL_CONST,
  offset,
});

export const resizeAction = () => {
  const height = window.innerHeight,
    topOffset = window.pageYOffset;
  const oneLine = height / 25;
  const lineCount = Math.floor(topOffset / oneLine);
  const offset = Math.max(0, oneLine * lineCount);
  const resize = {
    oneLine: height / 25,
    height,
    offset,
    lineCount,
  };
  return {
    type: RESIZE_CONST,
    resize,
  };
};
