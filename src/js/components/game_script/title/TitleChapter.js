import React from 'react';
import smoothScroll from '../../../utilities/smoothScroll';

export function TitleChapter ({data, oneLine}) {
  function scroll() {smoothScroll(oneLine * data.line)}
  return <li className='item pointer' onClick={scroll} key={data.index}>{data.title}</li>;
}
