import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

export const useTodoContext = () => {
  const todoItemsContext = useContext(TodoContext)

  if (!todoItemsContext) {
    throw new Error(
      'useTodoItems hook should only be used inside TodoItemsContextProvider'
    )
  }

  return todoItemsContext
}
