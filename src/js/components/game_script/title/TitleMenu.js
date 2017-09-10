import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux';

import { lineSkipAction, settingSizeAction } from '../../../actions/index'
import {TitleChapter} from './TitleChapter'

export function TitleMenu({actions, toggleMenu, chapters, oneLine, settings}) {
  if(!chapters) return null;

  function zoomIn(){actions.sizeAction(settings.fontSize - 4);}
  function zoomOut(){actions.sizeAction(settings.fontSize + 4);}

  let { changeLine } = actions;
  let chapterArray = chapters.map(function(data) {
    return TitleChapter({data, key:data.index, changeLine, oneLine});
  });

  return (
    <div className='title-menu-component'>
      <ul className='list'>
        <li>
          <span onClick={zoomIn}>+</span>
          &nbsp;Zoom&nbsp;
          <span onClick={zoomOut}>-</span>
        </li>
        { chapterArray }
      </ul>
    </div>
  );
}
