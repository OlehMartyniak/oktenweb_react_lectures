import React, { useEffect, useState } from 'react';
import { postsService } from '../../services';
import { Post } from '../Post/Post';

const Posts = ({userId}) => {

    let [posts,setPosts] = useState(null);
    useEffect(()=> {
        postsService.getPostById(userId).then(({data}) => setPosts(data))
    },[]);

    return (
        <div>
            {posts && posts.map((post) => <Post post={post} key={post.id}/>)}
        </div>
    );
};

export {Posts};