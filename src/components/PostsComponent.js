import React from 'react';
import {useEffect,useState} from "react";
import {PostComponent} from "./PostComponent";

const PostsComponent = ({id}) => {

    let [posts,setPosts] = useState([]);

    useEffect(()=> {
        fetch('http://jsonplaceholder.typicode.com/user/' + id + '/posts')
            .then(value => value.json())
            .then(value => setPosts(value))
    },[id])


    return (
        <div>
            {posts.map(post => <PostComponent key={post.id} post={post}/>)}
        </div>
    );
};

export {PostsComponent};