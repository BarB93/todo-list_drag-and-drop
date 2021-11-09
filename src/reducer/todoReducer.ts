import {generateId} from '../utils/generateId'
import {TodoAction, TodoActionTypes, TodoState, TodoItem} from '../types/todoTypes'
import produce from 'immer'

export function todoReducer(state: TodoState, action: TodoAction): TodoState {
    return produce(state, draft => {
        if (action.type === TodoActionTypes.LoadState) {
            return action.data
        }
        else if (action.type === TodoActionTypes.Add) {
            const todo = {id: generateId(), done: false, ...action.data.todos}
            draft.todos.push(todo)
        }
        else if (action.type === TodoActionTypes.Delete) {
            draft.todos = draft.todos.filter(
                ({id}) => id !== action.data.id,
            )
            draft.doneTodos = draft.doneTodos.filter(
                ({id}) => id !== action.data.id,
            )
        }
        else if(action.type === TodoActionTypes.ToggleDone) {

                let index = state.todos.findIndex(t => t.id === action.data.id)
                if(index !== -1) {
                    const todo: TodoItem = draft.todos.splice(index, 1)[0]
                    draft.doneTodos.unshift({...todo, done: true})

                }else {
                    let index = state.doneTodos.findIndex(t => t.id === action.data.id)
                    const todo = draft.doneTodos.splice(index, 1)[0]
                    draft.todos.push({...todo, done: false})
                }
        }
       else if (action.type === TodoActionTypes.Update) {
            draft.todos = action.data.todos
       } else
            throw new Error();
    })
    // switch (action.type) {
    //     case TodoActionTypes.LoadState: {
    //         return action.data
    //     }
    //     case TodoActionTypes.Add: {
    //         const todo = {id: generateId(), done: false, ...action.data.todos}
    //
    //         return {
    //             ...state,
    //             todos: [
    //                 ...state.todos,
    //                 todo,
    //             ]
    //         }
    //     }
    //     case TodoActionTypes.Delete:
    //         return {
    //             ...state,
    //             todos: state.todos.filter(
    //                 ({ id }) => id !== action.data.id,
    //             ),
    //             doneTodos: state.doneTodos.filter(
    //                 ({ id }) => id !== action.data.id,
    //             )
    //         };
    //     case TodoActionTypes.ToggleDone:
    //         let todos: TodoItem[]
    //         let doneTodos: TodoItem[]
    //         let todo: TodoItem
    //
    //         let index = state.todos.findIndex(t => t.id === action.data.id)
    //         if(index !== -1) {
    //             doneTodos = [{...state.todos[index], done:true}, ...state.doneTodos]
    //             todos = [...state.todos.slice(0, index), ...state.todos.slice(index+1)]
    //         }else {
    //             let index = state.doneTodos.findIndex(t => t.id === action.data.id)
    //             todos = [...state.todos, {...state.doneTodos[index], done: false}]
    //             doneTodos = [...state.doneTodos.slice(0, index), ...state.doneTodos.slice(index+1)]
    //         }
    //
    //
    //         return {
    //             ...state,
    //             todos,
    //             doneTodos
    //         };
    //     case TodoActionTypes.Update:
    //         return {
    //             ...state,
    //             todos: action.data.todos
    //         }
    //     default:
    //         throw new Error();
    // }
}