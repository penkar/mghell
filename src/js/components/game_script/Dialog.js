import React from 'react'

export function Dialog ({data, key, filterCharacter}) {
  const {character, line} = data;
  return (
    <div key={key} className="dialog">
      <div onClick={() => filterCharacter(character)} className='pointer'>
        { (character !== 'action') && character }
      </div>
      <span>{line}</span>
    </div>
  );
}
