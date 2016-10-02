import { CHANGE_CHAPTER, CHANGE_LINE, SET_CHAPTERS } from '../constants';


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

export function setChapters(chapters){
  return({
    type: SET_CHAPTERS,
    chapters
  })
}
