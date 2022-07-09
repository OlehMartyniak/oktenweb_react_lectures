import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {PostsComponent} from "../components/PostsComponent";

const PostsOfCurrentUser = (props) => {

    let {id} = useParams();

    return (
        <div>
            <PostsComponent id={id}/>
        </div>
    );
};

export {PostsOfCurrentUser};