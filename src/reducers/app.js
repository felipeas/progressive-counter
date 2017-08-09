import counterReducer, { getInitialState } from './counters'

const INITIAL_STATE = {
  life: 20,
  items:
  [
    getInitialState(20),
    getInitialState(20),
  ]
}

const list = (state = INITIAL_STATE, action) => {
    const { index, value, action: innerAction } = action
    switch (action.type) {
      case 'ADD_COUNTER':
        return [
          ...state.items,
          getInitialState()
          ]
      case 'PERFORM':
        return {...state, items: [
          ...state.items.slice(0, index),
          counterReducer(state.items[index], innerAction),
          ...state.items.slice(index + 1)
        ]}
      case 'SET':
        return {...state.life, value}
      case 'RESET':
        return INITIAL_STATE
      default:
        return state
  }
}

export default list