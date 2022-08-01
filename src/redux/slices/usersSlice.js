import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    users: []
};

const getUsers = createAsyncThunk(
    'usersSlice/getUsers',
    async () => {
        const users = fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json());
        return users
    }
)

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState,
    reducers: {},
    extraReducers: {
        [getUsers.fulfilled]: (state,action) => {
            state.users = action.payload
        }
    }

});

const {reducer:usersReducer} = usersSlice;

const usersActions = {getUsers};

export {usersReducer,usersActions};