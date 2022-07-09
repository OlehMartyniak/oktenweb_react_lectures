import React from 'react';
import {Outlet} from "react-router-dom";

import {CommentsComponent} from "../components";

const CommentsPage = () => {
    return (
        <div>
            <Outlet/>
            <CommentsComponent/>
        </div>
    );
};

export {CommentsPage};