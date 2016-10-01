import { CHANGE_LINE } from '../constants'

export function lineSkipAction(line){
  return ({
    type: CHANGE_LINE,
    line
  });
}
