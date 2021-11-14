import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
  CLEAR_USER_DOGGYDEX,
} from "./types";

import AuthService from "../services/auth.service";
import userService from "../services/user.service";
import { setUserDoggydex } from "./userDoggyDex";

export const register = (name, username, email, password) => (dispatch) => {
  return AuthService.register(name, username, email, password).then(
    (response) => {
      dispatch({
        type: REGISTER_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const login = (email, password) => (dispatch) => {
  // console.log("Is called");
  return AuthService.login(email, password).then(
    (data) => {
      // console.log(`Data: ${JSON.parse(data)}`);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
      });
      userService.getUserDoggyDex().then(res => {
        dispatch(setUserDoggydex(res))
      });
      // console.log("Logggggged in");
      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: LOGIN_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: LOGOUT,
  });

  dispatch( {
    type: CLEAR_USER_DOGGYDEX,
  })
};
