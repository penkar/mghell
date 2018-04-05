import React from 'react';
import { smoothScroll } from '../../../utilities/smoothScroll';

export const TitleChapter = ({data, oneLine}) => {
  const scroll = () => smoothScroll(oneLine * data.line);
  return <li className='item pointer' onClick={scroll} key={data.index}>{data.title}</li>;
}
