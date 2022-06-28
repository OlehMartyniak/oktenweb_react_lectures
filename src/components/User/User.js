import React from 'react';

const User = ({item}) => {

    return (
        <div>
            <h4>{item.id} - {item.name}</h4>
        </div>
    );
};

export {User};