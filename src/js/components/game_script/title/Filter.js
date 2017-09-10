import React from 'react'

export function Filter({actions, filter}) {
  function change(e){ actions.filter(e.target.value); }
  function toggle(){ actions.toggleFilterFind(!filter); }
  return(
    <span>
      <input
        placeholder='Find...'
        onChange={change}
        className='filter-component-input'
        />

      <span className='filter-button' onClick={ toggle }>
        { (filter && "Filter") || "Find Next" }
      </span>
    </span>
  );
}
