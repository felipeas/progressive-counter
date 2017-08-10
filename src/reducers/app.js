import counterReducer, { getInitialState } from './counters'

const DEFAULT_LIFE = 20
const radix = 10

const getInitialAppState = (life) => ({
  life: parseInt(life, radix),
  items:
  [
    getInitialState(parseInt(life, radix)),
    getInitialState(parseInt(life, radix)),
  ]
})

const list = (state = getInitialAppState(DEFAULT_LIFE), action) => {
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
        return getInitialAppState(value)
      case 'RESET':
        return getInitialAppState(state.life)
      default:
        return state
  }
}

export default list