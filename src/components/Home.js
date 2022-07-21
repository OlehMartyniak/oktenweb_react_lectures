import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {type} from "@testing-library/user-event/dist/type";

const Home = () => {

    let dispatch = useDispatch();

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                dispatch({type: 'LOAD_USERS', payload: value})
            });

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                dispatch({type: 'LOAD_POSTS', payload: value})
            });

    }, []);

    let state = useSelector(state => state);
    console.log(state);

    return (
        <div>
            Home
        </div>
    );
};

export {Home};