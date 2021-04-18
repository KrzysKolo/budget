import {

    BUDGET_GET_REQUEST,
    BUDGET_GET_SUCCESS,
    BUDGET_GET_FAILURE,
} from 'data/constants';

const fetchBudget = (id) => async(dispatch) => {
    dispatch({
        type: BUDGET_GET_REQUEST
    });

    try {
        const response = await fetchBudget(id);
        dispatch({
            type
        })
    }



};

const fetchBudgetedCategories = () => {

};