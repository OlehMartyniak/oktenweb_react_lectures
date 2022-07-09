import React, {useEffect, useState} from 'react';
import {getTodos} from "../../services/service";
import {TodoComponent} from "./TodoComponent";

const TodosComponent = () => {

    let [todos,setTodos] = useState([]);

    useEffect(()=> {
        getTodos().then(value => setTodos([...value]))
    },[]);

    return (
        <div>
            <h3>Todo list</h3>
            {todos.map(value => <TodoComponent key={value.id} item={value}/>)}
        </div>
    );
};

export {TodosComponent};