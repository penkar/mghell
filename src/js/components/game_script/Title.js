import React from 'react'
import {Filter, TitleMenu} from './title/index.js'

export function Title ({filter, actions, chapters, oneLine, settings}) {
  function toggleMenu() {actions.changeSetting({key:'navigate', value:!settings.navigate})}

  return (
    <div id='title-component'>
      <div className='section'>
        <div className='game-title'>METAL GEAR HELL</div>
        { Filter({filter, actions}) }
      </div>

      <div className='section chapter-list' onClick={toggleMenu}>
        <span className='menu-title pointer'>Chapter List</span>

        { settings.navigate && TitleMenu({toggleMenu: toggleMenu, actions, chapters, oneLine, settings}) }
      </div>
    </div>
  );
}
