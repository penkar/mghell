import React from 'react'

export function Filter({actions, filterbool, classname}) {
  function change(e){ actions.filter(e.target.value); }
  function toggle(){ actions.toggleFilter(!filterbool); }
  return(
    <span>
      <input onChange={change} className={classname} />
      <span className='filter-button' onClick={ toggle }>
        { (filterbool && "Filter") || "Find Next" }
      </span>
    </span>
  );
}
