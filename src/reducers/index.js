import { combineReducers } from 'redux';
import { countiesList } from './countiesList';
import { healthDepts } from './healthDepts';

const rootReducer = combineReducers({
    countiesList,
    healthDepts
})

export default rootReducer