import { getCookie } from "../../utils/cookie";
import { TConfig, TForgotPassword, TIDs, TLogin, TRegistration, TResetPassword } from "../types/data";

const config = {
  url: "https://norma.nomoreparties.space/api"
};

interface IOptions {
  method?: string;
  headers?: HeadersInit;
  body?: any;
};

const apiFunc = ({ url }: TConfig) => {

  function request(url: string, options: IOptions) {
    return fetch(url, options).then(checkResponse);
  }

  const fetchWithRefresh = async (url: string, options: IOptions) => {
    try {
      const resp = await fetch(url, options);
      return await checkResponse(resp);
    } catch (err) {
      if (err.message === "jwt expired") {
        const refreshData = await refreshToken() as any;
        options.headers.authorization = refreshData.accessToken;
        const resp = await fetch(url, options);
        return await checkResponse(resp);
      } else {
        return Promise.reject(err)
      }
    }
  };


  const checkResponse = (res: Response) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
  };

  const getIngredients = () => {
    return request(`${url}/ingredients`, {});
  };

  const placeOrder = (ingredients: TIDs) => {
    return request(`${url}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getCookie("token")
      },
      body: JSON.stringify(ingredients)
    });
  };

  const register = (data: TRegistration) => {
    return request(`${url}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
  };

  const login = (data: TLogin) => {
    return request(`${url}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
  };


  const forgotPassword = (data: TForgotPassword) => {
    return request(`${url}/password-reset`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
  };

  const resetPassword = (data: TResetPassword) => {
    return request(`${url}/password-reset/reset`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
  };

  // requires authorisation token //
  const changeUser = (profileInfo: TRegistration) => {
    return request(`${url}/auth/user`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getCookie("token")
      },
      body: JSON.stringify(profileInfo)
    });
  };


  const getUser = () => {
    return request(`${url}/auth/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getCookie("token")
      }
    });
  };

  // requires refresh token //

  const refreshToken = () => {
    return request(`${url}/auth/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        token: localStorage.getItem("refreshToken")
      })
    });
  };

  const logout = () => {
    return request(`${url}/auth/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        token: localStorage.getItem("refreshToken")
      })
    });
  };

  return {
    getIngredients: getIngredients,
    placeOrder: placeOrder,
    register: register,
    login: login,
    forgotPassword: forgotPassword,
    resetPassword: resetPassword,
    changeUser: changeUser,
    getUser: getUser,
    refreshToken: refreshToken,
    logout: logout
  };
};
const api = apiFunc(config);
export default api;
