import React from 'react';
import {Link, Route, Routes} from "react-router-dom";

import {HomePage, LayoutPage, AboutPage, PostsPage, UsersPage, CommentsPage, PostsOfCurrentUser} from "./pages";


const App = () => {

    return (
        <div>

            <div>
                <h3>Menu</h3>
                <ul>
                    <li><Link to={'/home'}>home</Link></li>
                    <li><Link to={'/layout'}>layout</Link></li>
                    <li><Link to={'/about'}>about</Link></li>
                </ul>
            </div>

            <div>
                <h3>Content</h3>

                <Routes>
                    <Route path={'/home'} element={<HomePage/>}/>

                    <Route path={'/layout'} element={<LayoutPage/>}>
                        <Route path={'posts'} element={<PostsPage/>}/>
                        <Route path={'users'} element={<UsersPage/>}>
                            <Route path={':id'} element={<PostsOfCurrentUser/> }/>
                        </Route>

                    </Route>
                    <Route path={'/about'} element={<AboutPage/>}/>
                </Routes>

            </div>

        </div>
    );
};

export default App;