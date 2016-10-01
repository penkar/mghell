import { CHANGE_LINE, CHANGE_CHAPTER, FILTER_TERM, FILTER_CHARACTER } from '../constants';

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

export function filterTerm(term){
  return({
    type: FILTER_TERM,
    term
  });
};

export function filterCharacter(character){
  return({
    type: FILTER_CHARACTER,
    character
  });
};
