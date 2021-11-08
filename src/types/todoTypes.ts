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
    type: 'loadState' | 'add' | 'delete' | 'toggleDone';
    data: any;
}