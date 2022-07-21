import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux";

const root = ReactDOM.createRoot(document.getElementById('root'));

// let store = createStore((state = {users:[],posts:[],user: null,post: null},action)=>{
//
//     switch (action.type) {
//         case 'LOAD_USERS':
//             return {...state, users: action.payload};
//
//         case 'LOAD_POSTS':
//             return {...state, posts: action.payload};
//
//         case 'GET_USER':
//             return {...state,user: state.users.find(value => value.id == action.payload)}
//
//         case 'GET_POSTS':
//             return {...state,post: state.posts.find(value => value.id == action.payload)}
//
//         default:
//             return state;
//     }
// })

root.render(
    <React.StrictMode>

        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>

    </React.StrictMode>
);
