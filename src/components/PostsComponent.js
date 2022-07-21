import React from 'react';
import {useSelector} from "react-redux";

const PostsComponent = () => {
    let posts = useSelector(state => state.posts);

    return (
        <div>
            {
                posts.map(value=><p key={value.id}>{value.title}</p>)
            }
        </div>
    );
};

export {PostsComponent};