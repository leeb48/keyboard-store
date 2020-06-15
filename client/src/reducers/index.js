import { combineReducers } from 'redux';
import alert from './alert';
import user from './user';

export default combineReducers({
  user,
  alert,
});
