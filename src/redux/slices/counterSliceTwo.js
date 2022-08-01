import {createSlice} from "@reduxjs/toolkit";

const initialState = { countTwo: 0 };

const counterSliceTwo = createSlice({
    name: 'counterSliceTwo',
    initialState,
    reducers:{
        inc:(state,action) => {
            state.countTwo += action.payload
        },
        dec:(state,action) => {
            state.countTwo -= action.payload
        },
        reset:(state,action) => {
            state.countTwo = 10
        }
    }
});

const {reducer:countTwoReducer,actions:{inc,dec,reset}} = counterSliceTwo;

const countTwoAction = {inc,dec,reset};

export {countTwoReducer,countTwoAction};