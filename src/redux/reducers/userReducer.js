let userReducer = (state = null, action) => {
    switch (action.type) {
        case 'GET_USER':
            let users = action.payload.data;
            return users.find(user => user.id == action.payload.id)
        default:
            return state
    }
};

export {userReducer};