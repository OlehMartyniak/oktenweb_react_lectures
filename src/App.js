import React, { useState } from 'react';
import {Posts, Users} from "./components";
import { getPostComments } from './services';

const App = () => {

  let [comments,setComments] = useState([]);
  const getPostId = (id) => {
    getPostComments(id).then(({data}) => setComments(data))
  }

    return (
        <div>
          <hr />
          <h3>Post comments</h3>
            {comments.map(value => <p>{value.body}</p>)}
          <hr />
          <Users/>
          <Posts getPostId={getPostId}/>
        </div>
    );
};

export default App;