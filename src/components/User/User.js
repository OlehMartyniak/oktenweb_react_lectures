import React from 'react';

const User = ({item}) => {

    const {id,name} = item;

    return (
        <div>
            <h4>{item.id} - {item.name}</h4>
        </div>
    );
};

export {User};