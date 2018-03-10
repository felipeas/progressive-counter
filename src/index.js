import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import 'bulma/css/bulma.css'
import 'font-awesome/css/font-awesome.css'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import lifeCounter from './reducers'

const counters = localStorage.getItem('prog-counters')

const bufferedState = counters ? {
  app: {
    items: JSON.parse(counters),
    life: localStorage.getItem('prog-life')
  }
} : null

const store = bufferedState ? createStore(lifeCounter, bufferedState) : createStore(lifeCounter)

const storage = () => {
  const { items, life } = store.getState().app

  localStorage.setItem('prog-counters', JSON.stringify(items))
  localStorage.setItem('prog-life', life)
}

const render = () =>
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  )
render()

store.subscribe(render)
store.subscribe(storage)

console.log(store.getState())

registerServiceWorker()
