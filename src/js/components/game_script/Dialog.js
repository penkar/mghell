import React from 'react'
import {Character} from './Character';
import {Line} from './Line';

export function Dialog ({data, key, filterCharacter}) {
  let {character, line} = data;
  let bool = character !== 'action';
  return (
    <div key={key} className="dialog">
      { Character({bool, character, filterCharacter}) }
      { Line({line, bool:!bool}) }
    </div>
  );
}
