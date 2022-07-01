import React from 'react';

const Post = ({ post }) => {
    return (
        <div className='post'>
           <p>userId - {post.userId}</p>
           <p>id - {post.id}</p>
           <p>title - {post.title}</p>
           <p>text - {post.body}</p> 
        </div>
    );
};

export {Post};