import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import 'bulma/css/bulma.css'
import 'font-awesome/css/font-awesome.css'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import lifeCounter from './reducers'

const store = createStore(lifeCounter)
console.log(store.getState())

const render = () =>
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  )

render()
store.subscribe(render)

registerServiceWorker()
