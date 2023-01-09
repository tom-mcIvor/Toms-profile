import '../styles/globals.css'
import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from './redux/reducers'

const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
)


export default function App({ Component, pageProps }) {
  <Provider store={store}>
  return <Component {...pageProps} />
  </Provider>
}


