import {combineReducers,configureStore} from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice";
import { carReducer } from "./slices/carSlice";

const rootReducer = combineReducers({
    cars: carReducer,
    auth: authReducer
});

const setupStore = ()=> configureStore({
    reducer: rootReducer
});

export {setupStore};