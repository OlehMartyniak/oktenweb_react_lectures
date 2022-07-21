let usersReducer = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_USERS':
            return [...action.payload];
        case 'FILTER_USERS':
            return [...state.filter(value => value[action.payload.field] == action.payload.value)];
        default:
            return state
    }
};

export {usersReducer};