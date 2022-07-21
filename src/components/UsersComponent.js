import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const UsersComponent = () => {

    let {users, user} = useSelector((state) => state);
    let dispatch = useDispatch();

    return (
        <div>
            {user?.email}
            {users.map(value => <div key={value.id}>
                {value.name}
                <button onClick={()=> {dispatch({type: 'GET_USER', payload: {data: users, id: value.id}})}}>
                    user details
            </button>
                </div>)}
        </div>
    );
};

export {UsersComponent};