import {generateId} from '../utils/generateId'
import {TodoActionTypes, TodoAction, TodoState, TodoItem} from '../types/todoTypes'

export function todoReducer(state: TodoState, action: TodoAction): TodoState {
    switch (action.type) {
        case TodoActionTypes.LoadState: {
            return action.data
        }
        case TodoActionTypes.Add: {
            const todo = {id: generateId(), done: false, ...action.data.todos}

            return {
                ...state,
                todos: [
                    ...state.todos,
                    todo,
                ]
            }
        }
        case TodoActionTypes.Delete:
            return {
                ...state,
                todos: state.todos.filter(
                    ({ id }) => id !== action.data.id,
                ),
                doneTodos: state.doneTodos.filter(
                    ({ id }) => id !== action.data.id,
                )
            };
        case TodoActionTypes.ToggleDone:
            let todos: TodoItem[]
            let doneTodos: TodoItem[]
            let todo: TodoItem

            let index = state.todos.findIndex(t => t.id === action.data.id)
            if(index !== -1) {
                doneTodos = [{...state.todos[index], done:true}, ...state.doneTodos]
                todos = [...state.todos.slice(0, index), ...state.todos.slice(index+1)]
            }else {
                let index = state.doneTodos.findIndex(t => t.id === action.data.id)
                todos = [...state.todos, {...state.doneTodos[index], done: false}]
                doneTodos = [...state.doneTodos.slice(0, index), ...state.doneTodos.slice(index+1)]
            }


            return {
                ...state,
                todos,
                doneTodos
            };
        case TodoActionTypes.Update:
            return {
                ...state,
                todos: action.data.todos
            }
        default:
            throw new Error();
    }
}