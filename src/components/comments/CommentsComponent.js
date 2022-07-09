import React, {useEffect, useState} from 'react';
import {getComments} from "../../services/service";
import {CommentComponent} from "./CommentComponent";

const CommentsComponent = () => {

    let [comments,setComments] = useState([]);

    useEffect(()=> {
        getComments().then(value => setComments( [...value]))
    },[]);

    return (
        <div>
            <h3>Comments list</h3>
            {comments.map(value => <CommentComponent key={value.id} item={value}/>)}
        </div>
    );
};

export {CommentsComponent};