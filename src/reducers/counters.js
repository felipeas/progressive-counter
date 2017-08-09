const getInitialState = (start) => {
  return({
    name: 'player',
    life: start
  })
}

const counters = (state = getInitialState(), action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {...state, life: state.life + 1}
    case 'DECREMENT':
      return {...state, life: state.life - 1}
    default:
      return state
  }
}

export {counters as default, getInitialState}