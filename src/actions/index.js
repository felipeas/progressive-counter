export const increment = index => ({
  index,
  type: 'PERFORM',
  action: {
    type: 'INCREMENT'
  }
});

export const decrement = index => ({
  index,
  type: 'PERFORM',
  action: {
    type: 'DECREMENT'
  }
});

export const set = value => ({
  value,
  type: 'SET'
});

export const reset = () => ({
  type: 'RESET'
});
