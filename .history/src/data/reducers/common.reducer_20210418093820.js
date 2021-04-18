import {

    All_CATEGORIES_GET_REQUEST,
    All_CATEGORIES_GET_SUCCESS,
    All_CATEGORIES_GET_FAILURE,
    LOADING_STATES

} from 'data/constants';



const initialState = {
    loadingState: {},
    allCategories: [],
}

function common(state = initialState, action) {
    const newLoadingState = { ...state.loadingState };
    switch (action.type) {
        case All_CATEGORIES_GET_REQUEST :
            return {
                ...state,
                loadingState: {
                    ...state.loadingState,
                    [action.type]: LOADING_STATES.LOADING,
                }
            }
        case All_CATEGORIES_GET_SUCCESS:
            delete newLoadingState.All_CATEGORIES_GET_REQUEST;
        return {
            ...state,
            allCategories: action.payload,
            loadingState: newLoadingState,
        }
        case All_CATEGORIES_GET_FAILURE:
            delete newLoadingState.All_CATEGORIES_GET_REQUEST;
        return {
            ...state,
            allCategories: [],
            loadingState: newLoadingState,
        }
        default:
            return state;
    }
};
export default common;