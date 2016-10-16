import React from 'react'
import { createStore } from 'redux'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, Link, browserHistory } from 'react-router'

import App from './js/containers/App'
import mghellStore from './js/reducers/index'

const store = createStore(mghellStore);

require("./style/main.scss")

function mgHELL(){
  return <Provider store={store}><App /></Provider>;
}

render(
  mgHELL(),
  document.getElementById('mount')
);
