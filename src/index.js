import { legacy_createStore as createStore } from 'redux'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './js/containers/App'
import mghellStore from './js/reducers/index'

import './style/main.scss'

const store = createStore(mghellStore);

createRoot(document.getElementById('mount')).render(
  <Provider store={store}><App /></Provider>
);
