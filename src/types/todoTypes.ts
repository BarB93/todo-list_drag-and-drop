export enum TodoActionTypes {
    Add, LoadState, Delete, toggleDone
}

export interface TodoItem {
    id: string;
    title: string;
    details?: string;
    done: boolean;
}

export interface TodoItemsState {
    todoItems: TodoItem[];
}

export interface TodoItemsAction {
    type: TodoActionTypes;
    data: any;
}