import { combineReducers } from 'redux';
import signInOrOut from './signInOrOut';

const rootReducer = combineReducers({
  signInOrOut,
});

export default rootReducer;