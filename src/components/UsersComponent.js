import React from 'react';
import {useSelector} from "react-redux";
import {UserComponent} from "./UserComponent";

const UsersComponent = () => {

    const {users} = useSelector(state => state.usersReducer)

    return (
        <div>
            {users.map(user => <UserComponent key={user.id} user={user}/>)}
        </div>
    );
};

export {UsersComponent};