const initialState = {

}

function budget(state = initialState, action) {
    switch (action.type) {
        case "BUDGET_FETCHED":
        return {
            ...state,
            budget: action.payload
        }
    }
};