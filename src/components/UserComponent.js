import React from 'react';

const UserComponent = ({user}) => {
    return (
        <div>
            <h4>{user.id}</h4>
            <p>{user.name}</p>
            <p>{user.email}</p>
        </div>
    );
};

export {UserComponent};