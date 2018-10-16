import * as UserActions from '../action-types/user-action-types';

const initialState = {
  id: null,
  username: null
}

function user(state=initialState, action) {
  switch(action.type) {
    case UserActions.SET_USER:
      return {
        ...state,
        id: action.id,
        username: action.username
      }

    default:
      return state;
      // or return { ...state }, same thing
  }
}

export default user;
