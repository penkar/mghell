import { FILTER_TERM, FILTER_CHARACTER } from '../constants';

export const filterTerm = (term) => ({
  type: FILTER_TERM,
  term,
});

export const filterCharacter = (term) => ({
  type: FILTER_CHARACTER,
  term,
});
