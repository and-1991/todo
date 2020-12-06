import { GET_TODOS, DELETE_TODO, ADD_TODO, EDIT_TODO, MARK_TODO } from "./todos.types";

const INITIAL_STATE = {
    list: [
        {
            id: 1,
            todo: 'купить хлеб',
            status: 'process'
        },
        {
            id: 2,
            todo: 'купить хлеб',
            status: 'process'
        },
        {
            id: 3,
            todo: 'купить хлеб',
            status: 'process'
        },
    ],
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_TODOS:
            return {
                ...state,
                list: action.payload
            }
        case ADD_TODO: {
            return {
                ...state,
                list: [
                    ...state.list,
                    action.payload
                ]
            }
        }
        case EDIT_TODO: {
            return {
                ...state,
                list: action.payload
            }
        }
        case DELETE_TODO:
            return  {
                ...state,
                list: action.payload
            }
        case MARK_TODO:
            return {
                ...state,
                list: action.payload
            }
        default:
            return state;
    }
}

export default reducer;
