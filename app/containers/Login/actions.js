/*
 *
 * Login actions
 *
 */

import { LOGIN, LOGOUT } from './constants';

export function logintAction(userID, name, email, picture) {
  return {
    type: LOGIN,
    userID,
    name,
    email,
    picture,
  };
}

export function logoutAction(userID, name, email, picture) {
  return {
    type: LOGOUT,
    userID,
    name,
    email,
    picture,
  };
}
