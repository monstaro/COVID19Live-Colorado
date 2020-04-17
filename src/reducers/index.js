import { combineReducers } from 'redux';
import { countiesList } from './countiesList';
import { healthDepts } from './healthDepts';
import { countyDeaths } from './countyDeaths'

const rootReducer = combineReducers({
    countiesList,
    healthDepts,
    countyDeaths
})

export default rootReducer