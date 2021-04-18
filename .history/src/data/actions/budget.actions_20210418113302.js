import {

    BUDGET_GET_REQUEST,
    BUDGET_GET_SUCCESS,
    BUDGET_GET_FAILURE,
} from 'data/constants';

const fetchBudget = () => (dispatch) => {
    dispatch({
        type: BUDGET_GET_REQUEST
    });
// dispatch akcje BUDGET_GET_REQUEST
// request do API
const response = fetch(`http://localhost:4001/`)
// dispatch akcje BUDGET_GET_SUCCESS + przekazać dane do requestu

};

const fetchBudgetedCategories = () => {

};