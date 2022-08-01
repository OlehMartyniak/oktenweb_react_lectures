import React from 'react';
import {useDispatch} from "react-redux";
import {countOneAction, usersActions} from "../redux";

const UsersTools = () => {

    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={()=>dispatch(usersActions.getUsers())}>show users</button>
        </div>
    );
};

export {UsersTools};