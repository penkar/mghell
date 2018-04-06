import { CHANGE_CHAPTER, CHANGE_LINE, SET_CHAPTERS } from '../constants';

export function lineSkipAction(line){
  let height = window.innerHeight, topOffset = window.pageYOffset;
  let oneLine = height / 25;
  let offset = Math.max(0, oneLine * (line));
  let utilities = {
    oneLine,
    height,
    offset,
  }
  return ({
    type: CHANGE_LINE,
    line,
    utilities,
  });
};

export const changeChapter = (chapter) => ({
  type: CHANGE_CHAPTER,
  chapter
});


export const setChapters = (chapters) => ({
  type: SET_CHAPTERS,
  chapters
});
