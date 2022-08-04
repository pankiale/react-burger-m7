import {
  GET_LOGIN_FAILED,
  GET_LOGIN_REQUEST,
  GET_LOGIN_SUCCESS,
  GET_REG_FAILED,
  GET_REG_REQUEST,
  GET_REG_SUCCESS
} from "../actions/auth";


const initialState = {
  user: {},

  regRequest: false,
  regFailed: false,
  regSuccess: false,

  loginRequest: false,
  loginFailed: false,
  loginSuccess: false

};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REG_REQUEST: {
      return {
        ...state,
        regRequest: true
      };
    }
    case GET_REG_SUCCESS: {
      return {
        ...state,
        regFailed: false,
        regRequest: false,
        regSuccess: true
      };
    }
    case GET_REG_FAILED: {
      return { ...state, regFailed: true, regRequest: false };
    }
    case GET_LOGIN_REQUEST: {
      return {
        ...state,
        loginRequest: true
      };
    }
    case GET_LOGIN_SUCCESS: {
      return {
        ...state,
        loginFailed: false,
        loginRequest: false,
        loginSuccess: true,
        user: action.user
      };
    }
    case GET_LOGIN_FAILED: {
      return { ...state, regFailed: true, regRequest: false };
    }

    default: {
      return state;
    }
  }
};