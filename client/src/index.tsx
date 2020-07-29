import React from 'react'
import { render } from 'react-dom'
import createSagaMiddleware from 'redux-saga'
import { compose, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { GlobalStyles } from './GlobalStyles';
import { rootReducer, rootSaga } from './redux/redux';

const saga = createSagaMiddleware()

const store = createStore(rootReducer, compose(
  applyMiddleware(saga),
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
))

saga.run(rootSaga)

render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
