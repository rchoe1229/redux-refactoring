import { combineReducers } from 'redux'
import count from './count'
import characters from './characters'


export default combineReducers({
  count,
  characters,
})