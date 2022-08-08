import React from 'react';
import { Routes,Route,Navigate } from 'react-router-dom';

import {MainLayout} from './layouts';
import {LoginPage, RegisterPage, CarsPage} from './pages';
import css from './App.css';

const App = () => {
    return (
        <Routes>
          <Route path='' element={<MainLayout/>}>
            <Route index element={<Navigate to={'login'}/>}/>
            <Route path='login' element={<LoginPage/>}/>
            <Route path='register' element={<RegisterPage/>}/>
            <Route path='cars' element={<CarsPage/>}/>
          </Route>
        </Routes>
    );
};

export default App;