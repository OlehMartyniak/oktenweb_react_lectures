import React from 'react';
import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {AlbumsPage, CommentsPage, TodosPage} from "./pages";
import {PostCurrentComponent} from "./components";

const App = () => {

    return (<div>
            <Routes>

                <Route path={'/'} element={<MainLayout/>}>
                    <Route path={'todos'} element={<TodosPage/>}/>
                    <Route path={'albums'} element={<AlbumsPage/>}/>
                    <Route path={'comments'} element={<CommentsPage/>}>
                        <Route path={':postId'} element={<PostCurrentComponent/>}/>
                    </Route>
                </Route>

            </Routes>
        </div>);
};

export default App;