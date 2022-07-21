import React from 'react';
import {Link, Route, Routes} from "react-router-dom";
import {Home, PostsComponent, UsersComponent} from "./components";

const App = () => {

    return (
        <div>

            <ul>
                <li><Link to={'/'}>state home</Link></li>
                <li><Link to={'/users'}>users</Link></li>
                <li><Link to={'/posts'}>posts</Link></li>
            </ul>

            <Routes>
                <Route path={''} element={<Home/>}/>
                <Route path={'/users'} element={<UsersComponent/>}/>
                <Route path={'/posts'} element={<PostsComponent/>}/>
            </Routes>

        </div>
    );
};

export default App;