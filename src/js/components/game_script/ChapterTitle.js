import React from 'react';
export function ChapterTitle ({title, chapter, key}) {
  return (
    <div className='chapter-title-component' key={key}>
      Chapter {chapter}: <span className='chapter-title-span'>{title}</span>
    </div>
  )
}
