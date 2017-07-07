const getInitialState = () => {
  return({
    name: 'player',
    life: 20
  })
}

const counters = (state = getInitialState(), action) => {
  switch (action.type) {
    case 'INCREMENT':
      console.log(state.life)
      return {...state, life: state.life + 1}
    case 'DECREMENT':
      return {...state, life: state.life - 1}
    default:
      return state
  }
}

export {counters as default, getInitialState}