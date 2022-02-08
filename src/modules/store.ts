import { applyMiddleware, createStore } from "redux";
import loggerMiddleware from "./middleware";

const ADD = "ADD";
const DELETE = "DELETE";

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD :
            return [{text : action.text, id:Date.now()}, ...state];
        case DELETE:
            return state.filter(toDo=> toDo.id !== action.id);
        default:
            return state;
    }
}

const store = createStore(reducer, applyMiddleware(loggerMiddleware));

export default store;