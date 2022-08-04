import api from "../api/api";

export const GET_REG_REQUEST = "GET_REG_REQUEST";
export const GET_REG_SUCCESS = "GET_REG_SUCCESS";
export const GET_REG_FAILED = "GET_REG_FAILED";

export const GET_LOGIN_REQUEST = "GET_LOGIN_REQUEST";
export const GET_LOGIN_SUCCESS = "GET_LOGIN_SUCCESS";
export const GET_LOGIN_FAILED = "GET_LOGIN_FAILED";


export function getLogin(data) {
  return function(dispatch) {
    dispatch({
      type: GET_LOGIN_REQUEST
    });
    api.login(data)
      .then(res => {
        console.log(res)
        if (res && res.success) {
          dispatch({
            type: GET_LOGIN_SUCCESS,
            user: res.user
          });
        } else {
          dispatch({
            type: GET_LOGIN_FAILED
          });
        }
      })
      .catch(err => {
        console.error(err);
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
        console.error(err);
        dispatch({
          type: GET_REG_FAILED
        });
      });
  };
}
