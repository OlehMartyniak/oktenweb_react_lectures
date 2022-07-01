import React, { useState } from "react";
import { Users} from "./components/Users/Users";
import { UserInfo } from "./components/UserInfo/UserInfo";
import { Posts } from "./components/Posts/Posts";
import './App.css';

const App = () => {

let [user,setUser] = useState(null);
let [userId,setUserId] = useState(null);

  return (
    <div>
      <div className="usersAndInfo">
        <Users setUser={setUser} setUserId={setUserId}/>
        {user && <UserInfo user={user} setUserId={setUserId}/>}
        {userId && <Posts userId={userId}/>}
      </div>
     
    </div>
  );
};

export default App;
