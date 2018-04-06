import React from 'react'
import {smoothScroll} from '../../utilities/smoothScroll'
export function TitleMenu({actions, toggleMenu, chapters, oneLine, settings}) {
  if(!chapters) return null;

  const zoomIn = () => actions.settingSizeAction(settings.fontSize - 4),
   zoomOut = () => actions.settingSizeAction(settings.fontSize + 4);

  return (
    <div className='title-menu-component trans'>
      <ul className='list'>
        <li className='pointer item'>
          <span onClick={zoomIn}>+</span>
          &nbsp;Zoom&nbsp;
          <span onClick={zoomOut}>-</span>
        </li>
        { chapters.map( ({line, index, title}) =>
          <li className='item pointer' key={index} onClick={() => smoothScroll(oneLine * line)}>
            {title}
          </li> ) }
      </ul>
    </div>
  );
}
