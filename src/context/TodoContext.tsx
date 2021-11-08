import {createContext, ReactNode, useEffect, useReducer} from 'react'
import {TodoActionTypes, TodoItemsAction, TodoItemsState} from '../types/todoTypes'
import {todoReducer} from '../reducer/todoReducer'

export const TodoContext = createContext<
    (TodoItemsState & { dispatch: (action: TodoItemsAction) => void }) | null
    >(null);

const defaultState = { todoItems: [] };
const localStorageKey = 'todoListState';

export const TodoContextProvider = ({
                                             children,
                                         }: {
    children?: ReactNode;
}) => {
    const [state, dispatch] = useReducer(todoReducer, defaultState);

    useEffect(() => {
        const savedState = localStorage.getItem(localStorageKey);

        if (savedState) {
            try {
                dispatch({ type: TodoActionTypes.LoadState, data: JSON.parse(savedState) });
                dispatch({ type: TodoActionTypes.LoadState, data: JSON.parse(savedState) });
            } catch {}
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(state));
    }, [state]);

    return (
        <TodoContext.Provider value={{ ...state, dispatch }}>
            {children}
        </TodoContext.Provider>
    );
};