import { AnyAction, Store } from 'redux';
import _ from 'lodash';
import SeamlessImmutable from 'seamless-immutable';

// Model
export interface Todo {
    id: number;
    title: string;
    description: string;
    index?: number;
}

// Actions
const LOAD = 'TODO/LOAD';
const CREATE = 'TODO/CREATE';
const DELETE = 'TODO/DELETE';
const UPDATE = 'TODO/UPDATE';

// Action types
interface CreateTodoAction extends AnyAction {
    type: typeof CREATE;
    payload: Todo;
}

interface DeleteTodoAction extends AnyAction {
    type: typeof DELETE;
    payload: Todo;
}

interface LoadTodoAction extends AnyAction {
    type: typeof LOAD;
    payload: Todo[];
}

interface UpdateTodoAction extends AnyAction {
    type: typeof UPDATE;
    payload: Todo;
}

export type TodoActionTypes =
    | CreateTodoAction
    | DeleteTodoAction
    | LoadTodoAction
    | UpdateTodoAction;

// Action Creators
export const createTodo = (payload: Todo): CreateTodoAction => ({
    type: CREATE,
    payload,
});

export const deleteTodo = (payload: Todo): DeleteTodoAction => ({
    type: DELETE,
    payload,
});

export const updateTodo = (payload: Todo): UpdateTodoAction => ({
    type: UPDATE,
    payload,
});

export const loadTodo = (payload: Todo[]): LoadTodoAction => ({
    type: LOAD,
    payload,
});


/** interface for todo state in redux store */
interface TodoState {
    todos: any;
}

/** Create an immutable todo state */
export type ImmutableTodoState = TodoState & SeamlessImmutable.ImmutableObject<TodoState>;

/** initial todo-state state */
const initialState: ImmutableTodoState = SeamlessImmutable({
    todos: [],
});

// Reducer
export default function (
    state: ImmutableTodoState = initialState,
    action: TodoActionTypes
): ImmutableTodoState {
 
    switch (action.type) {
        case CREATE:
            return SeamlessImmutable({
                todos: [ ...state.todos, action.payload],
            });
        case DELETE:
            let iIndex = action.payload.index!;
            return SeamlessImmutable({
                todos: [ ...state.todos.slice(0, iIndex), ...state.todos.slice(iIndex+1)],
            });

        default:
            return state;
    }
}
