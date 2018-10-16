import nav from './navigation-reducer';
import user from './user-reducer';
import { combineReducers } from 'redux';

const MainReducer = combineReducers({
  nav,
  user
})

export default MainReducer;
