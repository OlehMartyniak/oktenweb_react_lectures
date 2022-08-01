import React from 'react';
import {CountOneTools, CountTwoTools, ShowCounts, UsersComponent} from "./components";

import {UsersTools} from "./components/UsersTools";
import './App.css';

const App = () => {

    return (
        <div>

            <ShowCounts/>
            <hr/>
            <CountOneTools/>
            <hr/>
            <CountTwoTools/>


            <hr/>
            <UsersTools/>
            <UsersComponent/>

        </div>
    );
};

export default App;