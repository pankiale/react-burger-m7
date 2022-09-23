import api from "../api/api";
import { deleteCookie, setCookie } from "../../utils/cookie";
import { AppDispatch, AppThunk } from "../types";
import { TUser } from "../types/data";

export const GET_REG_REQUEST: "GET_REG_REQUEST" = "GET_REG_REQUEST";
export const GET_REG_SUCCESS: "GET_REG_SUCCESS" = "GET_REG_SUCCESS";
export const GET_REG_FAILED: "GET_REG_FAILED" = "GET_REG_FAILED";

export const GET_LOGIN_REQUEST: "GET_LOGIN_REQUEST" = "GET_LOGIN_REQUEST";
export const GET_LOGIN_SUCCESS: "GET_LOGIN_SUCCESS" = "GET_LOGIN_SUCCESS";
export const GET_LOGIN_FAILED: "GET_LOGIN_FAILED" = "GET_LOGIN_FAILED";

export const GET_LOGOUT_REQUEST: "GET_LOGOUT_REQUEST" = "GET_LOGOUT_REQUEST";
export const GET_LOGOUT_SUCCESS: "GET_LOGOUT_SUCCESS" = "GET_LOGOUT_SUCCESS";
export const GET_LOGOUT_FAILED: "GET_LOGOUT_FAILED" = "GET_LOGOUT_FAILED";

export const FORGOT_PASSWORD_REQUEST: "FORGOT_PASSWORD_REQUEST" = "FORGOT_PASSWORD_REQUEST";
export const FORGOT_PASSWORD_SUCCESS: "FORGOT_PASSWORD_SUCCESS" = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_FAILED: "FORGOT_PASSWORD_FAILED" = "FORGOT_PASSWORD_FAILED";

export const RESET_PASSWORD_REQUEST: "RESET_PASSWORD_REQUEST" = "RESET_PASSWORD_REQUEST";
export const RESET_PASSWORD_SUCCESS: "RESET_PASSWORD_SUCCESS" = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_FAILED: "RESET_PASSWORD_FAILED" = "RESET_PASSWORD_FAILED";

export const CHECK_TOKEN_REQUEST: "CHECK_TOKEN_REQUEST" = "CHECK_TOKEN_REQUEST";
export const CHECK_TOKEN_SUCCESS: "CHECK_TOKEN_SUCCESS" = "CHECK_TOKEN_SUCCESS";
export const CHECK_TOKEN_FAILED: "CHECK_TOKEN_FAILED" = "CHECK_TOKEN_FAILED";

export const REFRESH_TOKEN_REQUEST: "REFRESH_TOKEN_REQUEST" = "REFRESH_TOKEN_REQUEST";
export const REFRESH_TOKEN_SUCCESS: "REFRESH_TOKEN_SUCCESS" = "REFRESH_TOKEN_SUCCESS";
export const REFRESH_TOKEN_FAILED: "REFRESH_TOKEN_FAILED" = "REFRESH_TOKEN_FAILED";

export const CHANGE_USER_REQUEST: "CHANGE_USER_REQUEST" = "CHANGE_USER_REQUEST";
export const CHANGE_USER_SUCCESS: "CHANGE_USER_SUCCESS" = "CHANGE_USER_SUCCESS";
export const CHANGE_USER_FAILED: "CHANGE_USER_FAILED" = "CHANGE_USER_FAILED";

export const IS_USER_LOADED: "IS_USER_LOADED" = "IS_USER_LOADED";

export interface IGetRegRequestAction {
  readonly type: typeof GET_REG_REQUEST;
}

export interface IGetRegSuccessAction {
  readonly type: typeof GET_REG_SUCCESS;
}

export interface IGetRegFailedAction {
  readonly type: typeof GET_REG_FAILED;
}

export interface IGetLoginRequestAction {
  readonly type: typeof GET_LOGIN_REQUEST;
}

export interface IGetLoginSuccessAction {
  readonly type: typeof GET_LOGIN_SUCCESS;
  user: TUser;
}

export interface IGetLoginFailedAction {
  readonly type: typeof GET_LOGIN_FAILED;
}

export interface IGetLogoutRequestAction {
  readonly type: typeof GET_LOGOUT_REQUEST;
}

export interface IGetLogoutSuccessAction {
  readonly type: typeof GET_LOGOUT_SUCCESS;
}

export interface IGetLogoutFailedAction {
  readonly type: typeof GET_LOGOUT_FAILED;
}

export interface IForgotPasswordRequestAction {
  readonly type: typeof FORGOT_PASSWORD_REQUEST;
}

export interface IForgotPasswordSuccessAction {
  readonly type: typeof FORGOT_PASSWORD_SUCCESS;
}

export interface IForgotPasswordFailedAction {
  readonly type: typeof FORGOT_PASSWORD_FAILED;
}

export interface IResetPasswordRequestAction {
  readonly type: typeof RESET_PASSWORD_REQUEST;
}

export interface IResetPasswordSuccessAction {
  readonly type: typeof RESET_PASSWORD_SUCCESS;
}

export interface IResetPasswordFailedAction {
  readonly type: typeof RESET_PASSWORD_FAILED;
}

export interface ICheckTokenRequestAction {
  readonly type: typeof CHECK_TOKEN_REQUEST;
}

export interface ICheckTokenSuccessAction {
  readonly type: typeof CHECK_TOKEN_SUCCESS;
  user: TUser;
}

export interface ICheckTokenFailedAction {
  readonly type: typeof CHECK_TOKEN_FAILED;
}

export interface IRefreshTokenRequestAction {
  readonly type: typeof REFRESH_TOKEN_REQUEST;
}

export interface IRefreshTokenSuccessAction {
  readonly type: typeof REFRESH_TOKEN_SUCCESS;
}

export interface IRefreshTokenFailedAction {
  readonly type: typeof REFRESH_TOKEN_FAILED;
}

export interface IChangeUserRequestAction {
  readonly type: typeof CHANGE_USER_REQUEST;
}

export interface IChangeUserSuccessAction {
  readonly type: typeof CHANGE_USER_SUCCESS;
  user: TUser;
}

export interface IChangeUserFailedAction {
  readonly type: typeof CHANGE_USER_FAILED;
}

export interface IIsUserLoadedAction {
  readonly type: typeof IS_USER_LOADED;
}

const getRegRequestAction = (): IGetRegRequestAction => ({
  type: GET_REG_REQUEST
});
const getRegSuccessAction = (): IGetRegSuccessAction => ({
  type: GET_REG_SUCCESS
});
const getRegFailedAction = (): IGetRegFailedAction => ({
  type: GET_REG_FAILED
});

const getLoginRequestAction = (): IGetLoginRequestAction => ({
  type: GET_LOGIN_REQUEST
});
const getLoginSuccessAction = (user: TUser): IGetLoginSuccessAction => ({
  type: GET_LOGIN_SUCCESS,
  user: user
});
const getLoginFailedAction = (): IGetLoginFailedAction => ({
  type: GET_LOGIN_FAILED
});

const getLogoutRequestAction = (): IGetLogoutRequestAction => ({
  type: GET_LOGOUT_REQUEST
});
const getLogoutSuccessAction = (): IGetLogoutSuccessAction => ({
  type: GET_LOGOUT_SUCCESS
});
const getLogoutFailedAction = (): IGetLogoutFailedAction => ({
  type: GET_LOGOUT_FAILED
});

const forgotPasswordRequestAction = (): IForgotPasswordRequestAction => ({
  type: FORGOT_PASSWORD_REQUEST
});
const forgotPasswordSuccessAction = (): IForgotPasswordSuccessAction => ({
  type: FORGOT_PASSWORD_SUCCESS
});
const forgotPasswordFailedAction = (): IForgotPasswordFailedAction => ({
  type: FORGOT_PASSWORD_FAILED
});

const resetPasswordRequestAction = (): IResetPasswordRequestAction => ({
  type: RESET_PASSWORD_REQUEST
});
const resetPasswordSuccessAction = (): IResetPasswordSuccessAction => ({
  type: RESET_PASSWORD_SUCCESS
});
const resetPasswordFailedAction = (): IResetPasswordFailedAction => ({
  type: RESET_PASSWORD_FAILED
});

const checkTokenRequestAction = (): ICheckTokenRequestAction => ({
  type: CHECK_TOKEN_REQUEST
});
const checkTokenSuccessAction = (user: TUser): ICheckTokenSuccessAction => ({
  type: CHECK_TOKEN_SUCCESS,
  user: user
});
const checkTokenFailedAction = (): ICheckTokenFailedAction => ({
  type: CHECK_TOKEN_FAILED
});

const refreshTokenRequestAction = (): IRefreshTokenRequestAction => ({
  type: REFRESH_TOKEN_REQUEST
});
const refreshTokenSuccessAction = (): IRefreshTokenSuccessAction => ({
  type: REFRESH_TOKEN_SUCCESS
});
const refreshTokenFailedAction = (): IRefreshTokenFailedAction => ({
  type: REFRESH_TOKEN_FAILED
});

const changeUserRequestAction = (): IChangeUserRequestAction => ({
  type: CHANGE_USER_REQUEST
});
const changeUserSuccessAction = (user: TUser): IChangeUserSuccessAction => ({
  type: CHANGE_USER_SUCCESS,
  user: user
});
const changeUserFailedAction = (): IChangeUserFailedAction => ({
  type: CHANGE_USER_FAILED
});

const isUserLoadedAction = (): IIsUserLoadedAction => ({
  type: IS_USER_LOADED
});

export type TAuthActions =
  IGetRegRequestAction
  | IGetRegSuccessAction
  | IGetRegFailedAction
  | IGetLoginRequestAction
  | IGetLoginSuccessAction
  | IGetLoginFailedAction
  | IGetLogoutRequestAction
  | IGetLogoutSuccessAction
  | IGetLogoutFailedAction
  | IForgotPasswordRequestAction
  | IForgotPasswordSuccessAction
  | IForgotPasswordFailedAction
  | IResetPasswordRequestAction
  | IResetPasswordSuccessAction
  | IResetPasswordFailedAction
  | ICheckTokenRequestAction
  | ICheckTokenSuccessAction
  | ICheckTokenFailedAction
  | IRefreshTokenRequestAction
  | IRefreshTokenSuccessAction
  | IRefreshTokenFailedAction
  | IChangeUserRequestAction
  | IChangeUserSuccessAction
  | IChangeUserFailedAction
  | IIsUserLoadedAction
;

export const refreshTokenThunk: AppThunk = () => {
  return function(dispatch: AppDispatch) {
    dispatch(refreshTokenRequestAction());
    api.refreshToken()
      .then(res => {
        if (res && res.success) {
          dispatch(refreshTokenSuccessAction());
          const authToken = res["accessToken"].split("Bearer ")[1];
          setCookie("token", authToken, 20);
          const refreshToken = res["refreshToken"];
          localStorage.setItem("refreshTokenThunk", refreshToken);
          return res;
        } else {
          dispatch(refreshTokenFailedAction());
          return res;
        }
      })
      .catch(err => {
        console.error(err.message);
        dispatch(checkTokenFailedAction());
        return err;
      });
  };
};

export const checkTokenThunk: AppThunk = () => {
  return function(dispatch: AppDispatch) {
    dispatch(checkTokenRequestAction());
    api.getUser()
      .then(res => {
        if (res && res.success) {
          dispatch(checkTokenSuccessAction(res.user));
          return res;
        } else {
          console.log("else", res);
          dispatch(checkTokenFailedAction());
          throw res;
        }
      })
      .catch(err => {
        dispatch(checkTokenFailedAction());
        console.error(err.message);
      });
  };
};

export const getLoginThunk: AppThunk = (data) => {
  return function(dispatch: AppDispatch) {
    dispatch(getLoginRequestAction());
    return api.login(data)
      .then(res => {
        if (res && res.success) {
          dispatch(getLoginSuccessAction(res.user));
          const authToken = res["accessToken"].split("Bearer ")[1];
          setCookie("token", authToken, 2000);
          const refreshToken = res["refreshToken"];
          localStorage.setItem("refreshTokenThunk", refreshToken);
          return res;
        } else {
          dispatch(getLoginFailedAction());
          return res;
        }
      })
      .catch(err => {
        console.error(err.message);
        dispatch(getLoginFailedAction());
        return err;
      });
  };
};

export const getChangeUserThunk: AppThunk = (profileInfo) => {
  return function(dispatch: AppDispatch) {
    dispatch(changeUserRequestAction());
    return api.changeUser(profileInfo)
      .then(res => {
        if (res && res.success) {
          dispatch(changeUserSuccessAction(res.user));
          return res;
        } else {
          dispatch(changeUserFailedAction());
          return res;
        }
      })
      .catch(err => {
        console.error(err.message);
        dispatch(changeUserFailedAction());
        return err;
      });
  };
};

export const getForgotPasswordThunk: AppThunk = (data) => {
  return function(dispatch: AppDispatch) {
    dispatch(forgotPasswordRequestAction());
    return api.forgotPassword(data)
      .then(res => {
        if (res && res.success) {
          dispatch(forgotPasswordSuccessAction());
          return res;
        } else {
          dispatch(forgotPasswordFailedAction());
          return res;
        }
      })
      .catch(err => {
        console.error(err.message);
        dispatch(forgotPasswordFailedAction());
        return err;
      });
  };
};

export const getResetPasswordThunk: AppThunk = (data) => {
  return function(dispatch: AppDispatch) {
    dispatch(resetPasswordRequestAction());
    return api.resetPassword(data)
      .then(res => {
        if (res && res.success) {
          dispatch(resetPasswordSuccessAction());
          return res;
        } else {
          dispatch(resetPasswordFailedAction());
          return res;
        }
      })
      .catch(err => {
        console.error(err.message);
        dispatch(resetPasswordFailedAction());
        return err;
      });
  };
};

export const getLogoutThunk: AppThunk = () => {
  return function(dispatch: AppDispatch) {
    dispatch(getLogoutRequestAction());
    return api.logout()
      .then(res => {
        console.log(res);
        if (res && res.success) {
          dispatch(getLogoutSuccessAction());
          deleteCookie("token");
          localStorage.removeItem("refreshTokenThunk");
          return res;
        } else {
          dispatch(getLogoutFailedAction());
          console.log(res);
          return res;
        }
      });
  };
};

export const getRegistrationThunk: AppThunk = (data) => {
  return function(dispatch: AppDispatch) {
    dispatch(getRegRequestAction());
    return api.register(data)
      .then(res => {
        if (res && res.success) {
          dispatch(getRegSuccessAction());
          return res;
        } else {
          dispatch(getRegFailedAction());
        }
      })
      .catch(err => {
        console.error(err.message);
        dispatch(getRegFailedAction());
        return err;
      });
  };
};
