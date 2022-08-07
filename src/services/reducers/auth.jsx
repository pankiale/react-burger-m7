import {
  CHECK_TOKEN_FAILED,
  CHECK_TOKEN_REQUEST, CHECK_TOKEN_SUCCESS,
  GET_LOGIN_FAILED,
  GET_LOGIN_REQUEST,
  GET_LOGIN_SUCCESS,
  GET_REG_FAILED,
  GET_REG_REQUEST,
  GET_REG_SUCCESS, IS_USER_LOADED, REFRESH_TOKEN_FAILED, REFRESH_TOKEN_REQUEST, REFRESH_TOKEN_SUCCESS
} from "../actions/auth";


const initialState = {
  user: {},

  regRequest: false,
  regFailed: false,
  regSuccess: false,

  loginRequest: false,
  loginFailed: false,
  loginSuccess: false,

  tokenRequest: false,
  tokenFailed: false,
  tokenSuccess: false,

  refreshTokenRequest: false,
  refreshTokenFailed: false,
  refreshTokenSuccess: false,

  isUserLoaded: false

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
      return { ...state, loginFailed: true, loginRequest: false };
    }
    case CHECK_TOKEN_REQUEST: {
      return {
        ...state,
        tokenRequest: true
      };
    }
    case CHECK_TOKEN_SUCCESS: {
      return {
        ...state,
        tokenFailed: false,
        tokenRequest: false,
        tokenSuccess: true,
        user: action.user
      };
    }
    case CHECK_TOKEN_FAILED: {
      return { ...state, tokenFailed: true, tokenRequest: false };
    }
    case REFRESH_TOKEN_REQUEST: {
      return {
        ...state,
        refreshTokenRequest: true
      };
    }
    case REFRESH_TOKEN_SUCCESS: {
      return {
        ...state,
        refreshTokenFailed: false,
        refreshTokenRequest: false,
        refreshTokenSuccess: true
      };
    }
    case REFRESH_TOKEN_FAILED: {
      return { ...state, refreshTokenFailed: true, refreshTokenRequest: false };
    }
    case IS_USER_LOADED: {
      return { ...state, isUserLoaded: true };
    }
    default: {
      return state;
    }
  }
};