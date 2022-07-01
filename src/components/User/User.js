import React from 'react';

const User = ({user,setUser,setUserId}) => {
    const click = ()=> {
        setUserId(false)
        setUser(user)
    }
    return (
        <div className='user'>
            <p>{user.name}</p>
            <button onClick={click}>user info</button>
        </div>
    );
};

export {User};

