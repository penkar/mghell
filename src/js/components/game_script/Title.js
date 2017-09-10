import React from 'react'
import {Filter, TitleMenu} from './title/index.js'

export function Title ({filter, actions, chapters, oneLine, settings}) {
  function toggleMenu() {actions.changeSetting({key:'navigate', value:!settings.navigate})}

  return (
    <div className='title-component'>
      <div className='title'>METAL GEAR HELL</div>

      { Filter({classname:'input', filterbool:filter, actions}) }

      <div className='menu' onClick={toggleMenu}>
        <span>Navigate</span>

        { settings.navigate && TitleMenu({toggleMenu: toggleMenu, actions, chapters, oneLine, settings}) }
      </div>
    </div>
  );
}
