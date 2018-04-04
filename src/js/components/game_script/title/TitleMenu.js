import React from 'react'
import {TitleChapter} from './TitleChapter'

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
        { chapters.map( (data) => TitleChapter({data, oneLine}) )  }
      </ul>
    </div>
  );
}
