import React from "react";
import {useEffect, useState} from "react";
import {getUsers} from '../../services';
import {User} from "../User/User";

const Users = () => {

    let [users,setUsers] = useState([])

    useEffect(()=> {

        getUsers().then(value => setUsers([...value]))

    },[])

    return (
        <div>
            {users.map((value) => <User item = {value} key={value.id}/>)}
        </div>
    );
};

export {Users};