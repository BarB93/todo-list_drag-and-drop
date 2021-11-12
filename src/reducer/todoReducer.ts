import {
  TodoAction,
  TodoActionTypes,
  TodoState,
  TodoItem,
} from '../types/todoTypes'
import { generateId } from '../utils/generateId'
import produce from 'immer'

export function todoReducer(state: TodoState, action: TodoAction): TodoState {
  return produce(state, (draft) => {
    if (action.type === TodoActionTypes.LoadState) {
      return action.data
    } else if (action.type === TodoActionTypes.Add) {
      const todo = { id: generateId(), done: false, ...action.data.todos }
      draft.todos.push(todo)
    } else if (action.type === TodoActionTypes.Delete) {
      draft.todos = draft.todos.filter(({ id }) => id !== action.data.id)
      draft.doneTodos = draft.doneTodos.filter(
        ({ id }) => id !== action.data.id
      )
    } else if (action.type === TodoActionTypes.ToggleDone) {
      let index = state.todos.findIndex((t) => t.id === action.data.id)
      if (index !== -1) {
        const todo: TodoItem = draft.todos.splice(index, 1)[0]
        draft.doneTodos.unshift({ ...todo, done: true })
      } else {
        let index = state.doneTodos.findIndex((t) => t.id === action.data.id)
        const todo = draft.doneTodos.splice(index, 1)[0]
        draft.todos.push({ ...todo, done: false })
      }
    } else if (action.type === TodoActionTypes.Update) {
      draft.todos = action.data.todos
    } else throw new Error()
  })
}
