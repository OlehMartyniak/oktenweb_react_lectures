import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {getPostCurrentComment} from "../../services/service";
import {PostComponent} from "./PostComponent";

const PostCurrentComponent = () => {

    const {postId} = useParams();

    const [posts,setPosts] = useState([]);

    useEffect(()=> {
        getPostCurrentComment(postId).then(value => setPosts([{...value}]))
    },[postId]);

    return (
        <div>
            <h4>Post Comment</h4>
            {posts.map(value => <PostComponent key={value.id} item={value}/>)}
        </div>
    );
};

export {PostCurrentComponent};