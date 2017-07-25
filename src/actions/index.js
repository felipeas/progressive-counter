export const increment = (index) => ({
  index,
  type: 'PERFORM', action: {
    type: 'INCREMENT'
  },
})

export const decrement = (index) => ({
  index,
  type: 'PERFORM', action: {
    type: 'DECREMENT'
  },
})
