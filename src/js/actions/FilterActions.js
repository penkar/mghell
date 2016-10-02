import { FILTER_TERM, FILTER_CHARACTER } from '../constants';

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
