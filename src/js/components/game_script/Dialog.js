import React from 'react'

export function Dialog ({data, key, filterCharacter}) {
  const {character, line} = data;
  const _click = () => filterCharacter(character);
  return (
    <div key={key} className="dialog">
      <div onClick={_click} className='pointer'>
        { (character !== 'action') && character }
      </div>
      <span>{line}</span>
    </div>
  );
}
