import React from 'react'
import { render } from 'react-dom'
import App from './js/containers/App'

function mgHELL(){
  return (<App />);
}

render(mgHELL(), document.getElementById('mount'));