import React, { useEffect, useState } from 'react';
import { usersService } from '../../services/';
import { User } from '../User/User';

const Users = ({setUser,setUserId}) => {

    let [users,setUsers] = useState([]);
    useEffect(()=> {
        usersService.getAll().then(({data}) => setUsers(data))
    },[]);
console.log(users);
    return (
        <div className='users'>
           {users.map(user => <User user={user} key={user.id} setUser={setUser} setUserId={setUserId}/>)} 
        </div>
    );
};

export {Users};