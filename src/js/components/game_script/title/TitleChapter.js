import React from 'react';
import smoothScroll from '../../../utilities/smoothScroll';

export function TitleChapter ({data, oneLine, changeLine}) {
  function scroll() {smoothScroll(oneLine * data.line)}
  return <li onClick={scroll} key={data.index}>{data.title}</li>;
}
