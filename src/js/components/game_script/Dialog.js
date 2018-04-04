import React from 'react'
import {Character} from './Character';
import {Line} from './Line';

export function Dialog ({data, key, filterCharacter}) {
  const {character, line} = data;
  const click = () => filterCharacter(character);
  return (
    <div key={key} className="dialog">
      <div onClick={click} className='pointer'>
        { (character !== 'action') && character }
      </div>
      <span>{line}</span>
    </div>
  );
}
