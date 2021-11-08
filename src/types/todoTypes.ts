export enum TodoActionTypes {
    Add = 'todo/ADD',
    LoadState = 'todo/LOAD_STATE',
    Delete = 'todo/DELETE',
    toggleDone = 'todo/TOGGLE_DONE'
}

export type TodoContextProviderValue = ({
    state:TodoState;
    dispatch: (action: TodoAction) => void;
} | null)

export interface TodoState {
    todoItems: TodoItem[];
}

export interface TodoFormData {
    title: string
    details: string
}

export interface AddTodoAction {
    type: TodoActionTypes.Add
    data: {
        todoItem: TodoFormData
    }
}

export interface DeleteTodoAction {
    type: TodoActionTypes.Delete
    data: {
        id: number | string
    }
}

export interface ToggleDoneTodoAction {
    type: TodoActionTypes.toggleDone
    data: {
        id: number | string
    }
}

export interface LoadStateTodoAction {
    type: TodoActionTypes.LoadState
    data: TodoState
}

export interface TodoItem {
    id: string;
    title: string;
    details?: string;
    done: boolean;
}

export type TodoAction =
    AddTodoAction
    | DeleteTodoAction
    | LoadStateTodoAction
    | ToggleDoneTodoAction

