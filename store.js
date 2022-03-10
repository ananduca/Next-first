import { reducer, initialState, blogStore } from './store/blog'
import React, { useReducer } from 'react'
import combine from './mixins/combine'

export const GlobalStore = React.createContext()

const globalValues = combine(
  blogStore
)
export default function Store({ children }) {
  const [blog, dispatch] = useReducer(reducer, initialState)
  return (
    <GlobalStore.Provider value={{ blog, dispatch }}>
      { children }
    </GlobalStore.Provider>
  )
}
