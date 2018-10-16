import * as NavActions from '../action-types/navigation-action-types';

const LOGIN = 0;
const HOME = 1;

const initialState = {
  currentScreenIndex: LOGIN
}

function nav(state=initialState, action) {
  switch(action.type) {
    case NavActions.GO_LOGIN:
      return {
        ...state,
        currentScreenIndex: LOGIN
      }

    case NavActions.GO_HOME:
      return {
        ...state,
        currentScreenIndex: HOME
      }

    default:
      return state;
  }
}

export default nav;
