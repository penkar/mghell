import { CHANGE_CHAPTER, CHANGE_LINE, SET_CHAPTERS } from '../constants';

export const lineSkipAction = (line) => {
  const height = window.innerHeight;
  const oneLine = height / 25;
  const offset = Math.max(0, oneLine * line);
  const utilities = {
    oneLine,
    height,
    offset,
  };
  return {
    type: CHANGE_LINE,
    line,
    utilities,
  };
};

export const changeChapter = (chapter) => ({
  type: CHANGE_CHAPTER,
  chapter,
});

export const setChapters = (chapters) => ({
  type: SET_CHAPTERS,
  chapters,
});
