import * as UserActions from '../action-types/user-action-types';

const initialState = {
  username: null
}

function user(state=initialState, action) {
  switch(action.type) {
    case UserActions.SET_USER:
      return {
        ...state,
        username: action.username
      }

    default:
      return state;
      // or return { ...state }, same thing
  }
}

export default user;
