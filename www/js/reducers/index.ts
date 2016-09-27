import { combineReducers } from 'redux'

import toyReducer from './toy.reducer'
// import autreReducer from './autre.reducer'

const rootReducer = combineReducers({
    toyReducer
})

export default rootReducer