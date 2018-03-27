import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from 'app/containers/App';
import rootReducer from 'app/reducers';

// require('./style/raw.scss');

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

render (
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('app')
);

