/*
 *
 * Login reducer
 *
 */
import produce from 'immer';
import { LOGIN, LOGOUT } from './constants';

export const initialState = {
  isLoggedIn: false,
  userID: '',
  name: '',
  email: '',
  picture: '',
};

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOGIN:
        console.log(action);
        draft.isLoggedIn = true;
        draft.userID = action.userID;
        draft.name = action.name;
        draft.email = action.email;
        draft.picture = action.picture;
        break;
      case LOGOUT:
        console.log(action);
        draft.isLoggedIn = false;
        draft.userID = action.userID;
        draft.name = action.name;
        draft.email = action.email;
        draft.picture = action.picture;
        break;
      default:
        return state;
    }
  });

export default loginReducer;
