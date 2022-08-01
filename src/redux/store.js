import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {countOneReducer, countTwoReducer, usersReducer} from "./slices";

const rootReducer = combineReducers({countOneReducer,countTwoReducer,usersReducer});

const setupStore = ()=> configureStore({
    reducer:rootReducer
});

export {setupStore};