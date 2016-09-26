import React from 'react'
import { render } from 'react-dom'
import App from './js/containers/App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import mghellStore from './js/reducers/index'

const store = createStore(mghellStore);


// import "!style!css!sass!./style/main.scss";

function mgHELL(){
  return <Provider store={store}><App /></Provider>;
}

render(mgHELL(), document.getElementById('mount'));
