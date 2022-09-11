import { getCookie } from "../../utils/cookie";
import { TConfig, TForgotPassword, TIDs, TIngredients, TRegistration, TResetPassword } from "../types/data";
import { ThunkDispatch } from "redux-thunk";
import { EmptyObject } from "redux";
import { TIngredientsState } from "../reducers/ingredients";
import { TConstructorState } from "../reducers/burgerConstructor";
import { TWsState } from "../reducers/ws";
import { TAuthState } from "../reducers/auth";
import {
  IDecreaseIngredientCount,
  IGetItemsFailedAction,
  IGetItemsRequestAction,
  IGetItemsSuccessAction, IIncreaseIngredientCount, IResetIngredientCount,
  ITabSwitchAction
} from "../actions/ingredients";
import {
  IAddIngredientAction,
  ICloseOrderModalAction, IDeleteIngredientAction, IMoveElementAction,
  IOpenOrderModalAction,
  IPlaceOrderFailedAction,
  IPlaceOrderRequestAction,
  IPlaceOrderSuccessAction, IResetAllIngredientsAction, IResetTotalPriceAction, ISetTotalPriceAction
} from "../actions/burgerConstructor";
import {
  IChangeUserFailedAction,
  IChangeUserRequestAction, IChangeUserSuccessAction,
  ICheckTokenFailedAction,
  ICheckTokenRequestAction,
  ICheckTokenSuccessAction,
  IForgotPasswordFailedAction,
  IForgotPasswordRequestAction,
  IForgotPasswordSuccessAction,
  IGetLoginFailedAction,
  IGetLoginRequestAction,
  IGetLoginSuccessAction,
  IGetLogoutFailedAction,
  IGetLogoutRequestAction,
  IGetLogoutSuccessAction,
  IGetRegFailedAction,
  IGetRegRequestAction,
  IGetRegSuccessAction, IIsUserLoadedAction, IRefreshTokenFailedAction,
  IRefreshTokenRequestAction, IRefreshTokenSuccessAction,
  IResetPasswordFailedAction,
  IResetPasswordRequestAction,
  IResetPasswordSuccessAction
} from "../actions/auth";
import {
  IWsClearStoreAction,
  IWsConnectionClosedAction, IWsConnectionErrorAction,
  IWsConnectionInitAction,
  IWsConnectionOpenAction,
  IWsGetMessageAction
} from "../actions/ws";

const  config = {
  url: "https://norma.nomoreparties.space/api"
};

const apiFunc = ({url}: TConfig) => {

  const checkResponse = (res: Response) => {
    if (res.status === 200) {
      return res.json();
    }
    return Promise.reject(res);
  }

  const getIngredients = () => {
    return fetch(`${url}/ingredients`)
      .then((res) => checkResponse(res));
  }

  const placeOrder = (ingredients: TIDs) => {
    return fetch(`${url}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getCookie("token")
      },
      body: JSON.stringify(ingredients)
    })
      .then((res) => checkResponse(res));
  }

  const register = (data: ThunkDispatch<(() => (EmptyObject & { ingredients: TIngredientsState; burgerConstructorIngredients: TConstructorState; ws: { total: null; orders: null; totalToday: null; wsConnection: boolean; error: undefined } | TWsState; auth: { forgotPasswordRequest: boolean; tokenSuccess: boolean; tokenFailed: boolean; regRequest: boolean; resetPasswordFailed: boolean; refreshTokenSuccess: boolean; regFailed: boolean; changeUserRequest: boolean; loginRequest: boolean; logoutRequest: boolean; loginFailed: boolean; refreshTokenFailed: boolean; isUserLoaded: boolean; logoutFailed: boolean; resetPasswordSuccess: boolean; forgotPasswordFailed: boolean; loginSuccess: boolean; forgotPasswordSuccess: boolean; regSuccess: boolean; resetPasswordRequest: boolean; tokenRequest: boolean; changeUserFailed: boolean; changeUserSuccess: boolean; user: {}; refreshTokenRequest: boolean; logoutSuccess: boolean } | TAuthState } & S)) & (() => S) extends ((...args: any) => infer R) ? R : any, unknown, IGetItemsRequestAction | IGetItemsSuccessAction | IGetItemsFailedAction | ITabSwitchAction | IIncreaseIngredientCount | IDecreaseIngredientCount | IResetIngredientCount | IPlaceOrderRequestAction | IPlaceOrderSuccessAction | IPlaceOrderFailedAction | IOpenOrderModalAction | ICloseOrderModalAction | IAddIngredientAction | IDeleteIngredientAction | IResetAllIngredientsAction | ISetTotalPriceAction | IResetTotalPriceAction | IMoveElementAction | IGetRegRequestAction | IGetRegSuccessAction | IGetRegFailedAction | IGetLoginRequestAction | IGetLoginSuccessAction | IGetLoginFailedAction | IGetLogoutRequestAction | IGetLogoutSuccessAction | IGetLogoutFailedAction | IForgotPasswordRequestAction | IForgotPasswordSuccessAction | IForgotPasswordFailedAction | IResetPasswordRequestAction | IResetPasswordSuccessAction | IResetPasswordFailedAction | ICheckTokenRequestAction | ICheckTokenSuccessAction | ICheckTokenFailedAction | IRefreshTokenRequestAction | IRefreshTokenSuccessAction | IRefreshTokenFailedAction | IChangeUserRequestAction | IChangeUserSuccessAction | IChangeUserFailedAction | IIsUserLoadedAction | IWsConnectionInitAction | IWsConnectionOpenAction | IWsGetMessageAction | IWsConnectionClosedAction | IWsConnectionErrorAction | IWsClearStoreAction>) => {
    return fetch(`${url}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((res) => checkResponse(res));
  }

  const login = (data: ThunkDispatch<(() => (EmptyObject & { ingredients: TIngredientsState; burgerConstructorIngredients: TConstructorState; ws: { total: null; orders: null; totalToday: null; wsConnection: boolean; error: undefined } | TWsState; auth: { forgotPasswordRequest: boolean; tokenSuccess: boolean; tokenFailed: boolean; regRequest: boolean; resetPasswordFailed: boolean; refreshTokenSuccess: boolean; regFailed: boolean; changeUserRequest: boolean; loginRequest: boolean; logoutRequest: boolean; loginFailed: boolean; refreshTokenFailed: boolean; isUserLoaded: boolean; logoutFailed: boolean; resetPasswordSuccess: boolean; forgotPasswordFailed: boolean; loginSuccess: boolean; forgotPasswordSuccess: boolean; regSuccess: boolean; resetPasswordRequest: boolean; tokenRequest: boolean; changeUserFailed: boolean; changeUserSuccess: boolean; user: {}; refreshTokenRequest: boolean; logoutSuccess: boolean } | TAuthState } & S)) & (() => S) extends ((...args: any) => infer R) ? R : any, unknown, IGetItemsRequestAction | IGetItemsSuccessAction | IGetItemsFailedAction | ITabSwitchAction | IIncreaseIngredientCount | IDecreaseIngredientCount | IResetIngredientCount | IPlaceOrderRequestAction | IPlaceOrderSuccessAction | IPlaceOrderFailedAction | IOpenOrderModalAction | ICloseOrderModalAction | IAddIngredientAction | IDeleteIngredientAction | IResetAllIngredientsAction | ISetTotalPriceAction | IResetTotalPriceAction | IMoveElementAction | IGetRegRequestAction | IGetRegSuccessAction | IGetRegFailedAction | IGetLoginRequestAction | IGetLoginSuccessAction | IGetLoginFailedAction | IGetLogoutRequestAction | IGetLogoutSuccessAction | IGetLogoutFailedAction | IForgotPasswordRequestAction | IForgotPasswordSuccessAction | IForgotPasswordFailedAction | IResetPasswordRequestAction | IResetPasswordSuccessAction | IResetPasswordFailedAction | ICheckTokenRequestAction | ICheckTokenSuccessAction | ICheckTokenFailedAction | IRefreshTokenRequestAction | IRefreshTokenSuccessAction | IRefreshTokenFailedAction | IChangeUserRequestAction | IChangeUserSuccessAction | IChangeUserFailedAction | IIsUserLoadedAction | IWsConnectionInitAction | IWsConnectionOpenAction | IWsGetMessageAction | IWsConnectionClosedAction | IWsConnectionErrorAction | IWsClearStoreAction>) => {
    return fetch(`${url}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((res) => checkResponse(res));
  }


  const forgotPassword = (data: ThunkDispatch<(() => (EmptyObject & { ingredients: TIngredientsState; burgerConstructorIngredients: TConstructorState; ws: { total: null; orders: null; totalToday: null; wsConnection: boolean; error: undefined } | TWsState; auth: { forgotPasswordRequest: boolean; tokenSuccess: boolean; tokenFailed: boolean; regRequest: boolean; resetPasswordFailed: boolean; refreshTokenSuccess: boolean; regFailed: boolean; changeUserRequest: boolean; loginRequest: boolean; logoutRequest: boolean; loginFailed: boolean; refreshTokenFailed: boolean; isUserLoaded: boolean; logoutFailed: boolean; resetPasswordSuccess: boolean; forgotPasswordFailed: boolean; loginSuccess: boolean; forgotPasswordSuccess: boolean; regSuccess: boolean; resetPasswordRequest: boolean; tokenRequest: boolean; changeUserFailed: boolean; changeUserSuccess: boolean; user: {}; refreshTokenRequest: boolean; logoutSuccess: boolean } | TAuthState } & S)) & (() => S) extends ((...args: any) => infer R) ? R : any, unknown, IGetItemsRequestAction | IGetItemsSuccessAction | IGetItemsFailedAction | ITabSwitchAction | IIncreaseIngredientCount | IDecreaseIngredientCount | IResetIngredientCount | IPlaceOrderRequestAction | IPlaceOrderSuccessAction | IPlaceOrderFailedAction | IOpenOrderModalAction | ICloseOrderModalAction | IAddIngredientAction | IDeleteIngredientAction | IResetAllIngredientsAction | ISetTotalPriceAction | IResetTotalPriceAction | IMoveElementAction | IGetRegRequestAction | IGetRegSuccessAction | IGetRegFailedAction | IGetLoginRequestAction | IGetLoginSuccessAction | IGetLoginFailedAction | IGetLogoutRequestAction | IGetLogoutSuccessAction | IGetLogoutFailedAction | IForgotPasswordRequestAction | IForgotPasswordSuccessAction | IForgotPasswordFailedAction | IResetPasswordRequestAction | IResetPasswordSuccessAction | IResetPasswordFailedAction | ICheckTokenRequestAction | ICheckTokenSuccessAction | ICheckTokenFailedAction | IRefreshTokenRequestAction | IRefreshTokenSuccessAction | IRefreshTokenFailedAction | IChangeUserRequestAction | IChangeUserSuccessAction | IChangeUserFailedAction | IIsUserLoadedAction | IWsConnectionInitAction | IWsConnectionOpenAction | IWsGetMessageAction | IWsConnectionClosedAction | IWsConnectionErrorAction | IWsClearStoreAction>) => {
    return fetch(`${url}/password-reset`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((res) => checkResponse(res));
  }

  const resetPassword = (data: ThunkDispatch<(() => (EmptyObject & { ingredients: TIngredientsState; burgerConstructorIngredients: TConstructorState; ws: { total: null; orders: null; totalToday: null; wsConnection: boolean; error: undefined } | TWsState; auth: { forgotPasswordRequest: boolean; tokenSuccess: boolean; tokenFailed: boolean; regRequest: boolean; resetPasswordFailed: boolean; refreshTokenSuccess: boolean; regFailed: boolean; changeUserRequest: boolean; loginRequest: boolean; logoutRequest: boolean; loginFailed: boolean; refreshTokenFailed: boolean; isUserLoaded: boolean; logoutFailed: boolean; resetPasswordSuccess: boolean; forgotPasswordFailed: boolean; loginSuccess: boolean; forgotPasswordSuccess: boolean; regSuccess: boolean; resetPasswordRequest: boolean; tokenRequest: boolean; changeUserFailed: boolean; changeUserSuccess: boolean; user: {}; refreshTokenRequest: boolean; logoutSuccess: boolean } | TAuthState } & S)) & (() => S) extends ((...args: any) => infer R) ? R : any, unknown, IGetItemsRequestAction | IGetItemsSuccessAction | IGetItemsFailedAction | ITabSwitchAction | IIncreaseIngredientCount | IDecreaseIngredientCount | IResetIngredientCount | IPlaceOrderRequestAction | IPlaceOrderSuccessAction | IPlaceOrderFailedAction | IOpenOrderModalAction | ICloseOrderModalAction | IAddIngredientAction | IDeleteIngredientAction | IResetAllIngredientsAction | ISetTotalPriceAction | IResetTotalPriceAction | IMoveElementAction | IGetRegRequestAction | IGetRegSuccessAction | IGetRegFailedAction | IGetLoginRequestAction | IGetLoginSuccessAction | IGetLoginFailedAction | IGetLogoutRequestAction | IGetLogoutSuccessAction | IGetLogoutFailedAction | IForgotPasswordRequestAction | IForgotPasswordSuccessAction | IForgotPasswordFailedAction | IResetPasswordRequestAction | IResetPasswordSuccessAction | IResetPasswordFailedAction | ICheckTokenRequestAction | ICheckTokenSuccessAction | ICheckTokenFailedAction | IRefreshTokenRequestAction | IRefreshTokenSuccessAction | IRefreshTokenFailedAction | IChangeUserRequestAction | IChangeUserSuccessAction | IChangeUserFailedAction | IIsUserLoadedAction | IWsConnectionInitAction | IWsConnectionOpenAction | IWsGetMessageAction | IWsConnectionClosedAction | IWsConnectionErrorAction | IWsClearStoreAction>) => {
    return fetch(`${url}/password-reset/reset`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((res) => checkResponse(res));
  }

  // requires authorisation token //
  const changeUser = (profileInfo: ThunkDispatch<(() => (EmptyObject & { ingredients: TIngredientsState; burgerConstructorIngredients: TConstructorState; ws: { total: null; orders: null; totalToday: null; wsConnection: boolean; error: undefined } | TWsState; auth: { forgotPasswordRequest: boolean; tokenSuccess: boolean; tokenFailed: boolean; regRequest: boolean; resetPasswordFailed: boolean; refreshTokenSuccess: boolean; regFailed: boolean; changeUserRequest: boolean; loginRequest: boolean; logoutRequest: boolean; loginFailed: boolean; refreshTokenFailed: boolean; isUserLoaded: boolean; logoutFailed: boolean; resetPasswordSuccess: boolean; forgotPasswordFailed: boolean; loginSuccess: boolean; forgotPasswordSuccess: boolean; regSuccess: boolean; resetPasswordRequest: boolean; tokenRequest: boolean; changeUserFailed: boolean; changeUserSuccess: boolean; user: {}; refreshTokenRequest: boolean; logoutSuccess: boolean } | TAuthState } & S)) & (() => S) extends ((...args: any) => infer R) ? R : any, unknown, IGetItemsRequestAction | IGetItemsSuccessAction | IGetItemsFailedAction | ITabSwitchAction | IIncreaseIngredientCount | IDecreaseIngredientCount | IResetIngredientCount | IPlaceOrderRequestAction | IPlaceOrderSuccessAction | IPlaceOrderFailedAction | IOpenOrderModalAction | ICloseOrderModalAction | IAddIngredientAction | IDeleteIngredientAction | IResetAllIngredientsAction | ISetTotalPriceAction | IResetTotalPriceAction | IMoveElementAction | IGetRegRequestAction | IGetRegSuccessAction | IGetRegFailedAction | IGetLoginRequestAction | IGetLoginSuccessAction | IGetLoginFailedAction | IGetLogoutRequestAction | IGetLogoutSuccessAction | IGetLogoutFailedAction | IForgotPasswordRequestAction | IForgotPasswordSuccessAction | IForgotPasswordFailedAction | IResetPasswordRequestAction | IResetPasswordSuccessAction | IResetPasswordFailedAction | ICheckTokenRequestAction | ICheckTokenSuccessAction | ICheckTokenFailedAction | IRefreshTokenRequestAction | IRefreshTokenSuccessAction | IRefreshTokenFailedAction | IChangeUserRequestAction | IChangeUserSuccessAction | IChangeUserFailedAction | IIsUserLoadedAction | IWsConnectionInitAction | IWsConnectionOpenAction | IWsGetMessageAction | IWsConnectionClosedAction | IWsConnectionErrorAction | IWsClearStoreAction>) => {
    return fetch(`${url}/auth/user`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getCookie("token")
      },
      body: JSON.stringify(profileInfo)
    })
      .then((res) => checkResponse(res));
  }


  const checkToken = () => {
    return fetch(`${url}/auth/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getCookie("token")
      }
    })
      .then((res) => checkResponse(res));
  }

  // requires refresh token //

  const refreshToken= () => {
    return fetch(`${url}/auth/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        token: localStorage.getItem("refreshToken")
      })
    })
      .then((res) => checkResponse(res));
  }

  const logout = () => {
    return fetch(`${url}/auth/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        token: localStorage.getItem("refreshToken")
      })
    })
      .then((res) => checkResponse(res));
  }
return {
  getIngredients: getIngredients,
  placeOrder: placeOrder,
  register: register,
  login: login,
  forgotPassword: forgotPassword,
  resetPassword: resetPassword,
  changeUser: changeUser,
  checkToken: checkToken,
  refreshToken: refreshToken,
  logout: logout
}
}
const api = apiFunc(config);
export default api;
