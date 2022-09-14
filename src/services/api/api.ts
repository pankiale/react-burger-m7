import { getCookie } from "../../utils/cookie";
import { TConfig, TForgotPassword, TIDs, TLogin, TRegistration, TResetPassword } from "../types/data";

const config = {
  url: "https://norma.nomoreparties.space/api"
};

const apiFunc = ({ url }: TConfig) => {
  const checkResponse = (res: Response) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
  };

  const getIngredients = () => {
    return fetch(`${url}/ingredients`)
      .then((res) => checkResponse(res));
  };

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
  };

  const register = (data: TRegistration) => {
    return fetch(`${url}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((res) => checkResponse(res));
  };

  const login = (data: TLogin) => {
    return fetch(`${url}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((res) => checkResponse(res));
  };


  const forgotPassword = (data: TForgotPassword) => {
    return fetch(`${url}/password-reset`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((res) => checkResponse(res));
  };

  const resetPassword = (data: TResetPassword) => {
    return fetch(`${url}/password-reset/reset`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((res) => checkResponse(res));
  };

  // requires authorisation token //
  const changeUser = (profileInfo: TRegistration) => {
    return fetch(`${url}/auth/user`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getCookie("token")
      },
      body: JSON.stringify(profileInfo)
    })
      .then((res) => checkResponse(res));
  };


  const checkToken = () => {
    return fetch(`${url}/auth/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getCookie("token")
      }
    })
      .then((res) => checkResponse(res));
  };

  // requires refresh token //

  const refreshToken = () => {
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
  };

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
  };
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
  };
};
const api = apiFunc(config);
export default api;
