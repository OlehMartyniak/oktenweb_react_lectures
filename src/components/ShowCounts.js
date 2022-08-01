import React from 'react';
import {useSelector} from "react-redux";
import {countOneReducer} from "../redux";

const ShowCounts = () => {

    const {countOne} = useSelector(state => state.countOneReducer);
    const {countTwo} = useSelector(state => state.countTwoReducer);


    return (
        <div>
            <h2>CountOne: {countOne}</h2>
            <hr/>
            <h2>CountTwo: {countTwo}</h2>
        </div>
    );
};

export {ShowCounts};