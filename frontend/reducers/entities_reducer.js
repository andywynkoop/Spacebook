import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import userIdMapReducer from './user_id_map_reducer';

export default combineReducers({
  users: usersReducer,
  userIdMap: userIdMapReducer
});
