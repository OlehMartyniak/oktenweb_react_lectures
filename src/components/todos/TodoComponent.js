import React from 'react';

const TodoComponent = ({item}) => {
    return (
        <div>
            <h4>{item.id} - {item.title}</h4>
        </div>
    );
};

export {TodoComponent};