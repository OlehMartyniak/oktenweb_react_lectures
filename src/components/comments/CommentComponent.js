import React from 'react';
import {Link} from "react-router-dom";

const CommentComponent = ({item}) => {
    return (
        <div>
            <h4>{item.id} - {item.name}</h4>
            <p>{item.body}</p>
            <span><Link to={item.postId.toString()}>Post for comment</Link></span>
        </div>
    );
};

export {CommentComponent};