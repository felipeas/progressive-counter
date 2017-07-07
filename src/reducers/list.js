import counterReducer, { getInitialState } from './counters'

const INITIAL_STATE = [
  getInitialState(),
  getInitialState(),
]

const list = (state = INITIAL_STATE, action) => {
    const { index, action: innerAction } = action
    switch (action.type) {
      case 'ADD_COUNTER':
        return [
          ...state,
          getInitialState()
          ]
      case 'PERFORM':
        return [
          ...state.slice(0, index),
          counterReducer(state[index], innerAction),
          ...state.slice(index + 1)
        ]
      default:
        return state
  }
}
export default list