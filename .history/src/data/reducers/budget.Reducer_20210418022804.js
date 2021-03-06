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
                    [action.type]: LOADING_STATES.LOADING,
                }
            }
        case BUDGET_GET_SUCCESS:
        return {
            ...state,
            budget: action.payload
        }
    }
};