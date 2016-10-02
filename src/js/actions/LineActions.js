import { CHANGE_CHAPTER, CHANGE_LINE } from '../constants';


export function lineSkipAction(line){
  return ({
    type: CHANGE_LINE,
    line
  });
};

export function changeChapter(chapter){
  return ({
    type: CHANGE_CHAPTER,
    chapter
  });
};
