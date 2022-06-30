import {createStore,applyMiddleware,combineReducers } from "redux";
import { AuthReducer } from "./auth/AuthReducer";
import { ProductReducer } from "./product/ProductReducer";

const ThunkMiddleware =require('redux-thunk').default
const rootReducer=combineReducers({
    AuthReducer,
    ProductReducer
})
export const store = createStore(rootReducer,{},applyMiddleware(ThunkMiddleware));
  