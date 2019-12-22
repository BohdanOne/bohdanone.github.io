import { combineReducers } from 'redux';
import soundReducer from './sound';

export default combineReducers({
  sound: soundReducer
});