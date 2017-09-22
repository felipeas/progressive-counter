import { combineReducers } from 'redux'
import app from './app'

const lifeCounter = combineReducers({
  app,
})

export default lifeCounter
