import React from 'react'
import {TitleChapter} from './TitleChapter'

export function TitleMenu({actions, toggleMenu, chapters, oneLine, settings}) {
  if(!chapters) return null;

  function zoomIn(){actions.settingSizeAction(settings.fontSize - 4);}
  function zoomOut(){actions.settingSizeAction(settings.fontSize + 4);}

  let chapterArray = chapters.map(function(data) {
    return TitleChapter({data, key:data.index, oneLine});
  });

  return (
    <div className='title-menu-component trans'>
      <ul className='list'>
        <li className='pointer item'>
          <span onClick={zoomIn}>+</span>
          &nbsp;Zoom&nbsp;
          <span onClick={zoomOut}>-</span>
        </li>
        { chapterArray }
      </ul>
    </div>
  );
}
