import {combineReducers} from "redux";
import {usersReducer} from "./usersReducer";
import {userReducer} from "./userReducer";
import {postsReducer} from "./postsReducer";

let reducers = combineReducers({users:usersReducer, posts:postsReducer,user:userReducer});

export {reducers};