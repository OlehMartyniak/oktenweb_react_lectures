import React, {useEffect, useState} from 'react';
import {UsersComponent} from "../components";
import {Outlet} from "react-router-dom";

const UsersPage = () => {
    return (
        <div>
            <UsersComponent/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export {UsersPage};