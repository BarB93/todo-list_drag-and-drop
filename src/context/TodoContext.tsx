import { createContext, ReactNode, useEffect, useReducer } from 'react'

import { todoReducer } from '../reducer/todoReducer'
import {
  TodoActionTypes,
  TodoContextProviderValue,
  TodoState,
} from '../types/todoTypes'

export const TodoContext = createContext<TodoContextProviderValue>(null)

const defaultState: TodoState = {
  todos: [],
  doneTodos: [],
}
const localStorageKey = 'todos'

export const TodoContextProvider = ({ children }: { children?: ReactNode }) => {
  const [state, dispatch] = useReducer(todoReducer, defaultState)

  useEffect(() => {
    const savedState = localStorage.getItem(localStorageKey)

    if (savedState) {
      try {
        dispatch({
          type: TodoActionTypes.LoadState,
          data: JSON.parse(savedState),
        })
      } catch {}
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(state))
  }, [state])

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  )
}
