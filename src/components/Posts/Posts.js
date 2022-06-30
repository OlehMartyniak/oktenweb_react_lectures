import React, { useEffect, useState } from 'react';
import { Post } from '../Post/Post';
import { getPosts } from '../../services';

const Posts = ({getPostId}) => {

    let [posts,setPosts] = useState([]);

useEffect(()=> {
    getPosts().then(({data}) => setPosts([...data]))
},[]); 
    



    return (
        <div>
            {posts.map(value => <Post key={value.id} item={value} getPostId={getPostId}/>)}
        </div>
    );
};

export {Posts};