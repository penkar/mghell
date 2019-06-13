import React from 'react'
import {TitleMenu} from './TitleMenu'

export const Title = ({filter, actions, chapters, oneLine, settings}) =>
  <div id='title-component'>
    <div className='section'>
      <div className='game-title'>METAL GEAR HELL</div>
      <span>
        <input placeholder='Find...' className='filter-component-input' onChange={
          ({target}) => actions.filter(target.value)
          }/>

        <span className='filter-button' onClick={
          () => actions.toggleFilterFind(!filter)
          }>
          { (filter && "Filter") || "Find Next" }
        </span>

      </span>
    </div>
    <div className='section chapter-list' onClick={
      () => actions.changeSetting({key:'navigate', value:!settings.navigate})
      }>
      <span className='menu-title pointer'>Chapter List</span>
      { settings.navigate && chapters && TitleMenu({actions, chapters, oneLine, settings}) }
    </div>
  </div>
