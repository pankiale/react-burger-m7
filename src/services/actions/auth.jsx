import api from "../api/api";
import { deleteCookie, setCookie } from "../../utils/cookie";

export const GET_REG_REQUEST = "GET_REG_REQUEST";
export const GET_REG_SUCCESS = "GET_REG_SUCCESS";
export const GET_REG_FAILED = "GET_REG_FAILED";

export const GET_LOGIN_REQUEST = "GET_LOGIN_REQUEST";
export const GET_LOGIN_SUCCESS = "GET_LOGIN_SUCCESS";
export const GET_LOGIN_FAILED = "GET_LOGIN_FAILED";

export const GET_LOGOUT_REQUEST = "GET_LOGOUT_REQUEST";
export const GET_LOGOUT_SUCCESS = "GET_LOGOUT_SUCCESS";
export const GET_LOGOUT_FAILED = "GET_LOGOUT_FAILED";

export const FORGOT_PASSWORD_REQUEST = "FORGOT_PASSWORD_REQUEST";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_FAILED = "FORGOT_PASSWORD_FAILED";

export const RESET_PASSWORD_REQUEST = "RESET_PASSWORD_REQUEST";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_FAILED = "RESET_PASSWORD_FAILED";

export const CHECK_TOKEN_REQUEST = "CHECK_TOKEN_REQUEST";
export const CHECK_TOKEN_SUCCESS = "CHECK_TOKEN_SUCCESS";
export const CHECK_TOKEN_FAILED = "CHECK_TOKEN_FAILED";

export const REFRESH_TOKEN_REQUEST = "REFRESH_TOKEN_REQUEST";
export const REFRESH_TOKEN_SUCCESS = "REFRESH_TOKEN_SUCCESS";
export const REFRESH_TOKEN_FAILED = "REFRESH_TOKEN_FAILED";

export const CHANGE_USER_REQUEST = "CHANGE_USER_REQUEST";
export const CHANGE_USER_SUCCESS = "CHANGE_USER_SUCCESS";
export const CHANGE_USER_FAILED = "CHANGE_USER_FAILED";

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
    return api.login(data)
      .then(res => {
        if (res && res.success) {
          dispatch({
            type: GET_LOGIN_SUCCESS,
            user: res.user
          });
          const authToken = res["accessToken"].split("Bearer ")[1];
          setCookie("token", authToken, 2000);
          const refreshToken = res["refreshToken"];
          localStorage.setItem("refreshToken", refreshToken);
          return res;
        } else {
          dispatch({
            type: GET_LOGIN_FAILED
          });
          return res;
        }
      })
      .catch(err => {
        console.error(err.message);
        dispatch({
          type: GET_LOGIN_FAILED
        });
        return err;
      });
  };
}

export function getChangeUser(profileInfo) {
  return function(dispatch) {
    dispatch({
      type: CHANGE_USER_REQUEST
    });
    return api.changeUser(profileInfo)
      .then(res => {
        if (res && res.success) {
          dispatch({
            type: CHANGE_USER_SUCCESS,
            user: res.user
          });
          return res;
        } else {
          dispatch({
            type: CHANGE_USER_FAILED
          });
          return res;
        }
      })
      .catch(err => {
        console.error(err.message);
        dispatch({
          type: CHANGE_USER_FAILED
        });
        return err;
      });
  };
}

export function getForgotPassword(data) {
  return function(dispatch) {
    dispatch({
      type: FORGOT_PASSWORD_REQUEST
    });
    return api.forgotPassword(data)
      .then(res => {
        if (res && res.success) {
          dispatch({
            type: FORGOT_PASSWORD_SUCCESS,
          })
          return res;
        } else {
          dispatch({
            type: FORGOT_PASSWORD_FAILED
          })
          return res;
        }
      })
      .catch(err => {
        console.error(err.message);
        dispatch({
          type: FORGOT_PASSWORD_FAILED
        });
        return err;
      });
  };
}

export function getResetPassword(data) {
  return function(dispatch) {
    dispatch({
      type: RESET_PASSWORD_REQUEST
    });
    return api.resetPassword(data)
      .then(res => {
        if (res && res.success) {
          dispatch({
            type: RESET_PASSWORD_SUCCESS,
          })
          return res;
        } else {
          dispatch({
            type: RESET_PASSWORD_FAILED
          })
          return res;
        }
      })
      .catch(err => {
        console.error(err.message);
        dispatch({
          type: RESET_PASSWORD_FAILED
        });
        return err;
      });
  };
}

export function getLogout(data) {
  return function(dispatch) {
    dispatch({
      type: GET_LOGOUT_REQUEST
    });
    return api.logout(data)
      .then(res => {
        console.log(res)
        if (res && res.success) {
          dispatch({
            type: GET_LOGOUT_SUCCESS,
          });
          deleteCookie("token");
          localStorage.removeItem("refreshToken");
          return res;
        } else {
          dispatch({
            type: GET_LOGOUT_FAILED
          });
          console.log(res)
          return res;
        }
      })
      .catch(err => {
        console.error('catch', err.message);
        dispatch({
          type: GET_LOGOUT_FAILED
        });
        return err;
      });
  };
}


export function getRegistration(data) {
  return function(dispatch) {
    dispatch({
      type: GET_REG_REQUEST
    });
    return api.register(data)
      .then(res => {
        if (res && res.success) {
          dispatch({
            type: GET_REG_SUCCESS
          });
          return res;
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
        return err;
      });
  };
}
