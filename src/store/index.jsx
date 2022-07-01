import {createStore, combineReducers} from "redux"
import {reducer} from "./reducer"
import { modalReducer } from "./modalReducer";

const rootReducer = combineReducers({
    nav: reducer,
    modal: modalReducer,
})



export const store = createStore(rootReducer);

