import React from 'react';

const PostComponent = ({item}) => {
    return (
        <div>
            <hr/>
            <h4>Post </h4>
            <h3>{item.id} - {item.title}</h3>
            <p>{item.body}</p>
            <hr/>
        </div>
    );
};

export {PostComponent};