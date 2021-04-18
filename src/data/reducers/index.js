import { combineReducers } from 'redux';
import budget from './budget.reducer';
import commom from './common.reducer';

const rootReducer = combineReducers({
    budget,
    commom,
});

export default rootReducer;