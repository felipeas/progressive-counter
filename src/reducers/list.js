import counterReducer,  { INITIAL_STATE as COUNTER_INITIAL_STATE } from './counters'

const INITIAL_STATE = [
  COUNTER_INITIAL_STATE,
  COUNTER_INITIAL_STATE,
]

const list = (state = INITIAL_STATE, action) => {
    const { index, action: innerAction } = action
    switch (action.type) {
      case 'ADD_COUNTER':
        return [
          ...state,
          COUNTER_INITIAL_STATE
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