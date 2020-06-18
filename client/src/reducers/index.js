import { combineReducers } from 'redux';
import alert from './alert';
import user from './user';
import store from './store';

export default combineReducers({
  user,
  alert,
  store,
});
