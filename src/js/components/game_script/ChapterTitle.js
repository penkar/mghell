import React from 'react';
export const ChapterTitle = ({title, chapter, key}) =>
  <div className='chapter-title-component' key={key}>
    Chapter {chapter}: <span className='chapter-title-span'>{title}</span>
  </div>
