import { combineReducers } from 'redux';
import { countiesList } from './countiesList';
import { healthDepts } from './healthDepts';
import { countyDeaths } from './countyDeaths';
import { bookmarks } from './bookmarks'


const rootReducer = combineReducers({
    countiesList,
    healthDepts,
    countyDeaths,
    bookmarks
})

export default rootReducer