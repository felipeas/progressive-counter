export const INITIAL_STATE = 
  {
    name: 'player',
    life: 20
  }

const counters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'INCREMENT':
      console.log(state.life)
      state.life += 1
      return state
    case 'DECREMENT':
      state.life -= 1
      return state
    default:
      return state
  }
}

export default counters
