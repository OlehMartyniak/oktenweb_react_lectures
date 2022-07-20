import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const App = () => {

    let state = useSelector(state => state);
    console.log(state);
    let dispatch = useDispatch();

    return (
        <div>

            {state}

            <button onClick={()=> {
                dispatch({type:'INC',payload:1})
            }}>INCrement</button>

            <button onClick={()=> {
                dispatch({type:'DEC',payload:1})
            }}>DECrement</button>

            <button onClick={()=> {
                dispatch({type:'RES'})
            }}>RES</button>

        </div>
    );
};

export default App;