import { GET_TODOS, ADD_TODO, EDIT_TODO, DELETE_TODO, MARK_TODO } from "./todos.types";

export const delay = (ms) => new Promise(
        (resolve) => setTimeout(resolve, ms)
);

export const getTodos = (data) => {
    return {
        type: GET_TODOS,
        payload: data
    }
};

export const addTodo = (data) => {
    const todo = {
        id: data.id,
        todo: data.text,
        status: 'process'
    }

    return {
        type: ADD_TODO,
        payload: todo
    }
}

export const editTodo = (data) => {
    return {
        type: EDIT_TODO,
        payload: data
    }
}

export const deleteTodo = (data) => {
    return {
        type: DELETE_TODO,
        payload: data
    }
}


export const markTodo = (data) => {
    return {
        type: MARK_TODO,
        payload: data
    }
}
