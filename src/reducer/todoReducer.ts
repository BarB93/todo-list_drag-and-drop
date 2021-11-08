import {generateId} from '../utils/generateId'
import {TodoActionTypes, TodoItemsAction, TodoItemsState} from '../types/todoTypes'

export function todoReducer(state: TodoItemsState, action: TodoItemsAction) {
    switch (action.type) {
        case TodoActionTypes.LoadState: {
            return action.data;
        }
        case TodoActionTypes.Add:
            return {
                ...state,
                todoItems: [
                    { id: generateId(), done: false, ...action.data.todoItem },
                    ...state.todoItems,
                ],
            };
        case TodoActionTypes.Delete:
            return {
                ...state,
                todoItems: state.todoItems.filter(
                    ({ id }) => id !== action.data.id,
                ),
            };
        case TodoActionTypes.toggleDone:
            const itemIndex = state.todoItems.findIndex(
                ({ id }) => id === action.data.id,
            );
            const item = state.todoItems[itemIndex];

            return {
                ...state,
                todoItems: [
                    ...state.todoItems.slice(0, itemIndex),
                    { ...item, done: !item.done },
                    ...state.todoItems.slice(itemIndex + 1),
                ],
            };
        default:
            throw new Error();
    }
}