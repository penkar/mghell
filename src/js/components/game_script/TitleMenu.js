import React from 'react';
import {smoothScroll} from '../../utilities/smoothScroll';

export const TitleMenu = ({actions, chapters, oneLine, settings}) =>
  <div className='title-menu-component trans'>
    <ul className='list'>
      <li className='pointer item'>
        <span onClick={
          () => actions.settingSizeAction(settings.fontSize - 4)
          }>+</span>
        &nbsp;Zoom&nbsp;
        <span onClick={
          () => actions.settingSizeAction(settings.fontSize + 4)
          }>-</span>
      </li>
      { chapters.map( ({line, index, title}) =>
        <li className='item pointer' key={index} onClick={() => smoothScroll(oneLine * line)}>
          {title}
        </li> ) }
    </ul>
  </div>
