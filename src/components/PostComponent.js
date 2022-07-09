import React from 'react';

const PostComponent = ({post}) => {
    return (
        <div>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <hr/>
        </div>
    );
};

export {PostComponent};