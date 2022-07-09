import React from 'react';
import {useEffect, useState} from "react";
import {UserComponent} from "./UserComponent";

const UsersComponent = () => {

    let [users,setUsers] = useState([]);

    useEffect(()=> {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value))
    },[])

    return (
        <div>
            {users.map(user => <UserComponent key={user.id} user={user}/>)}
        </div>
    );
};

export {UsersComponent};