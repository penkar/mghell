import { FILTER_TERM, FILTER_CHARACTER } from '../constants';

export function filterTerm(term){
  return({
    type: FILTER_TERM,
    term
  });
};

export function filterCharacter(term){
  return({
    type: FILTER_CHARACTER,
    term
  });
};
