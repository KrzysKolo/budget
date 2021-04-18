import {
    BUDGET_GET,
    BUDGET_GET_REQUEST,
    BUDGET_GET_SUCCESS,
    BUDGET_GET_FAILURE,
    LOADING_STATES

} from 'data/constants';

const initialState = {
    loadingState: {},
    budget: {},
    budgetedCategories: [],
}

function budget(state = initialState, action) {
    switch (action.type) {
        case BUDGET_GET_REQUEST :
            return {
                ...state,
                loadingState: {
                    ...state.loadingState,
                    BUDGET_GET_REQUEST,
                }
            }
        case "BUDGET_FETCHED":
        return {
            ...state,
            budget: action.payload
        }
    }
};