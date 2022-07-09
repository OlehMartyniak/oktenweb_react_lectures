import React from 'react';
import {Link, Outlet} from "react-router-dom";

const LayoutPage = () => {
    return (
        <div>

            <h4>Sub menu</h4>
            <ol>
                <li><Link to={'users'}>users</Link></li>
                <li><Link to={'posts'}>posts</Link></li>
            </ol>
            <Outlet/>
        </div>


    );
};

export {LayoutPage};