import {combineReducers} from 'redux'
import authInfo from './auth'

export default combineReducers({
    auth: authInfo
})