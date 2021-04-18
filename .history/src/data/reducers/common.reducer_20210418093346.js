import {

    All_CATEGORIES_GET,
    All_CATEGORIES_GET_REQUEST,
    All_CATEGORIES_GET_SUCCESS,
    All_CATEGORIES_GET_FAILURE,
    LOADING_STATES

} from 'data/constants';

const initialState = {
    loadingState: {},
   allCategories: [],
}

function budget(state = initialState, action) {
    const newLoadingState = { ...state.loadingState };
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
            delete newLoadingState.BUDGET_GET_REQUEST;
        return {
            ...state,
            budget: action.payload,
            loadingState: newLoadingState,
        }
        case BUDGET_GET_FAILURE:
            delete newLoadingState.BUDGET_GET_REQUEST;
        return {
            ...state,
            budget: {},
            loadingState: newLoadingState,
        }
        default:
            return state;
    }
};
export default budget;