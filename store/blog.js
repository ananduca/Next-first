export const initialState = {
  counter: 0,
  counter2: 0
}
export const reducer = (state, action) => {
  switch (action) {
    case 'increment1':
      return { ...state, counter: state.counter + 1}
    case 'decrement1':
      return { ...state, counter: state.counter - 1}
    case 'increment2':
      return { ...state, counter2: state.counter2 + 1}
    case 'decrement2':
      return { ...state, counter2: state.counter2 - 1}
    default:
      return state
  } 
}

export const blogStore = { initialState, reducer }