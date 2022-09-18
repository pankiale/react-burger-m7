import {
  CHANGE_USER_FAILED,
  CHANGE_USER_REQUEST, CHANGE_USER_SUCCESS,
  CHECK_TOKEN_FAILED,
  CHECK_TOKEN_REQUEST,
  CHECK_TOKEN_SUCCESS, FORGOT_PASSWORD_FAILED, FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS,
  GET_LOGIN_FAILED,
  GET_LOGIN_REQUEST,
  GET_LOGIN_SUCCESS,
  GET_LOGOUT_FAILED,
  GET_LOGOUT_REQUEST,
  GET_LOGOUT_SUCCESS,
  GET_REG_FAILED,
  GET_REG_REQUEST,
  GET_REG_SUCCESS,
  IS_USER_LOADED,
  REFRESH_TOKEN_FAILED,
  REFRESH_TOKEN_REQUEST,
  REFRESH_TOKEN_SUCCESS,
  RESET_PASSWORD_FAILED, RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, TAuthActions
} from "../actions/auth";
import { TUser } from "../types/data";

export type TAuthState = {
  user: TUser | {},

  regRequest: boolean,
  regFailed: boolean,
  regSuccess: boolean,

  loginRequest: boolean,
  loginFailed: boolean,
  loginSuccess: boolean,

  logoutRequest: boolean,
  logoutFailed: boolean,
  logoutSuccess: boolean,

  forgotPasswordRequest: boolean,
  forgotPasswordFailed: boolean,
  forgotPasswordSuccess: boolean,

  resetPasswordRequest: boolean,
  resetPasswordFailed: boolean,
  resetPasswordSuccess: boolean,

  tokenRequest: boolean,
  tokenFailed: boolean,
  tokenSuccess: boolean,

  refreshTokenRequest: boolean,
  refreshTokenFailed: boolean,
  refreshTokenSuccess: boolean,

  changeUserRequest: boolean,
  changeUserFailed: boolean,
  changeUserSuccess: boolean,

  isUserLoaded: boolean
};

const initialState = {
  user: {},

  regRequest: false,
  regFailed: false,
  regSuccess: false,

  loginRequest: false,
  loginFailed: false,
  loginSuccess: false,

  logoutRequest: false,
  logoutFailed: false,
  logoutSuccess: false,

  forgotPasswordRequest: false,
  forgotPasswordFailed: false,
  forgotPasswordSuccess: false,

  resetPasswordRequest: false,
  resetPasswordFailed: false,
  resetPasswordSuccess: false,

  tokenRequest: false,
  tokenFailed: false,
  tokenSuccess: false,

  refreshTokenRequest: false,
  refreshTokenFailed: false,
  refreshTokenSuccess: false,

  changeUserRequest: false,
  changeUserFailed: false,
  changeUserSuccess: false,

  isUserLoaded: false

};

export const authReducer = (state = initialState, action: TAuthActions):TAuthState => {
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

    case GET_LOGOUT_REQUEST: {
      return {
        ...state,
        logoutRequest: true
      };
    }
    case GET_LOGOUT_SUCCESS: {
      return {
        ...state,
        logoutFailed: false,
        logoutRequest: false,
        logoutSuccess: true,
        user: {},
        loginSuccess: false
      };
    }
    case GET_LOGOUT_FAILED: {
      return { ...state, logoutFailed: true, logoutRequest: false };
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
    case CHANGE_USER_REQUEST: {
      return {
        ...state,
        changeUserRequest: true
      };
    }
    case CHANGE_USER_SUCCESS: {
      return {
        ...state,
        changeUserFailed: false,
        changeUserRequest: false,
        changeUserSuccess: true,
        user: action.user
      };
    }
    case CHANGE_USER_FAILED: {
      return { ...state, changeUserFailed: true, changeUserRequest: false };
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
    case FORGOT_PASSWORD_REQUEST: {
      return {
        ...state,
        forgotPasswordRequest: true
      };
    }
    case FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state,
        forgotPasswordFailed: false,
        forgotPasswordRequest: false,
        forgotPasswordSuccess: true
      };
    }
    case FORGOT_PASSWORD_FAILED: {
      return { ...state, forgotPasswordFailed: true, forgotPasswordRequest: false };
    }

    case RESET_PASSWORD_REQUEST: {
      return {
        ...state,
        resetPasswordRequest: true
      };
    }
    case RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        resetPasswordFailed: false,
        resetPasswordRequest: false,
        resetPasswordSuccess: true
      };
    }
    case RESET_PASSWORD_FAILED: {
      return { ...state, forgotPasswordFailed: true, forgotPasswordRequest: false };
    }

    case IS_USER_LOADED: {
      return { ...state, isUserLoaded: true };
    }
    default: {
      return state;
    }
  }
};