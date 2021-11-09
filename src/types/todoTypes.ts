export enum TodoActionTypes {
    Add = 'todo/ADD',
    LoadState = 'todo/LOAD_STATE',
    Delete = 'todo/DELETE',
    ToggleDone = 'todo/TOGGLE_DONE',
    Update = 'todo/UPDATE',
}

export type TodoContextProviderValue = ({
    state:TodoState;
    dispatch: (action: TodoAction) => void;
} | null)

export interface TodoState {
    todos: TodoItem[];
    doneTodos: TodoItem[],
}

export interface TodoFormData {
    title: string
    details: string
}

export interface AddTodoAction {
    type: TodoActionTypes.Add
    data: {
        todos: TodoFormData
    }
}

export interface DeleteTodoAction {
    type: TodoActionTypes.Delete
    data: {
        id: number | string
    }
}

export interface ToggleDoneTodoAction {
    type: TodoActionTypes.ToggleDone
    data: {
        id: number | string
    }
}

export interface UpdateTodoAction {
    type: TodoActionTypes.Update
    data: {
        todos: TodoItem[];
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
    | UpdateTodoAction

