import React from 'react';

const Post = ({item,getPostId}) => {
    return (
        <div>
            <h4>{item.title}</h4>
            <button onClick={ ()=> getPostId(item.id)}>post details</button>
        </div>
    );
};

export {Post};