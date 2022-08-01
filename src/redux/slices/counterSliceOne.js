import {createSlice} from "@reduxjs/toolkit";

const initialState = { countOne: 0 };

const counterSliceOne = createSlice({
    name: 'counterSliceOne',
    initialState,
    reducers:{
        inc:(state,action) => {
            ++state.countOne
        },
        dec:(state,action) => {
            --state.countOne
        },
        reset:(state,action) => {
            state.countOne = 0
        }
    }
});

const {reducer:countOneReducer,actions:{inc,dec,reset}} = counterSliceOne;

const countOneAction = {inc,dec,reset};

export {countOneReducer,countOneAction};