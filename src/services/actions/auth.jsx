import api from "../api/api";
import { setCookie } from "../../utils/cookie";

export const GET_REG_REQUEST = "GET_REG_REQUEST";
export const GET_REG_SUCCESS = "GET_REG_SUCCESS";
export const GET_REG_FAILED = "GET_REG_FAILED";

export const GET_LOGIN_REQUEST = "GET_LOGIN_REQUEST";
export const GET_LOGIN_SUCCESS = "GET_LOGIN_SUCCESS";
export const GET_LOGIN_FAILED = "GET_LOGIN_FAILED";

export const CHECK_TOKEN_REQUEST = "CHECK_TOKEN_REQUEST";
export const CHECK_TOKEN_SUCCESS = "CHECK_TOKEN_SUCCESS";
export const CHECK_TOKEN_FAILED = "CHECK_TOKEN_FAILED";

export const REFRESH_TOKEN_REQUEST = "REFRESH_TOKEN_REQUEST";
export const REFRESH_TOKEN_SUCCESS = "REFRESH_TOKEN_SUCCESS";
export const REFRESH_TOKEN_FAILED = "REFRESH_TOKEN_FAILED";


export const IS_USER_LOADED = "IS_USER_LOADED";

export function refreshToken() {
  return function(dispatch) {
    dispatch({
      type: REFRESH_TOKEN_REQUEST
    });
    api.refreshToken()
      .then(res => {
        if (res && res.success) {
          dispatch({
            type: REFRESH_TOKEN_SUCCESS
          });
          const authToken = res["accessToken"].split("Bearer ")[1];
          setCookie("token", authToken, 20);
          const refreshToken = res["refreshToken"];
          localStorage.setItem("refreshToken", refreshToken);
        } else {
          dispatch({
            type: REFRESH_TOKEN_FAILED
          });
        }
      })
      .catch(err => {
        console.error(err.message);
        dispatch({
          type: REFRESH_TOKEN_FAILED
        });

      });
  };
}

export function checkToken() {
  return function(dispatch) {
    dispatch({
      type: CHECK_TOKEN_REQUEST
    });
    api.checkToken()
      .then(res => {
        if (res && res.success) {
          dispatch({
            type: CHECK_TOKEN_SUCCESS,
            user: res.user
          });
        } else {
          dispatch({
            type: CHECK_TOKEN_FAILED
          });
        }
      })
      .then(() => dispatch({
        type: IS_USER_LOADED,
        payload: true
      }))
      .catch(err => {
        dispatch({
          type: CHECK_TOKEN_FAILED
        })
        console.error(err.message)
      });
  };
}


export function getLogin(data) {
  return function(dispatch) {
    dispatch({
      type: GET_LOGIN_REQUEST
    });
    api.login(data)
      .then(res => {
        if (res && res.success) {
          dispatch({
            type: GET_LOGIN_SUCCESS,
            user: res.user
          });
          const authToken = res["accessToken"].split("Bearer ")[1];
          setCookie("token", authToken, 20);
          const refreshToken = res["refreshToken"];
          localStorage.setItem("refreshToken", refreshToken);
        } else {
          dispatch({
            type: GET_LOGIN_FAILED
          });
        }
      })
      .catch(err => {
        console.error(err.message);
        dispatch({
          type: GET_LOGIN_FAILED
        });
      });
  };
}

export function getRegistration(data) {
  return function(dispatch) {
    dispatch({
      type: GET_REG_REQUEST
    });
    api.register(data)
      .then(res => {
        if (res && res.success) {
          dispatch({
            type: GET_REG_SUCCESS
          });
        } else {
          dispatch({
            type: GET_REG_FAILED
          });
        }
      })
      .catch(err => {
        console.error(err.message);
        dispatch({
          type: GET_REG_FAILED
        });
      });
  };
}
