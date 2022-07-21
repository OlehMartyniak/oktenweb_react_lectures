let postsReducer = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_POSTS':
            return [...action.payload];
        default:
            return state
    }
};

export {postsReducer}; 