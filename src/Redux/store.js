import { compose, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import {rootReducers} from "./Reducers";

export const store = createStore(
    rootReducers,
    compose(applyMiddleware(thunkMiddleware))
)