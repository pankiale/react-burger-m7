import { getCookie } from "../../utils/cookie";
import { refreshToken } from "../actions/auth";

const config = {
  url: "https://norma.nomoreparties.space/api"
};

class API {
  constructor({ url }) {
    this._url = url;
  }

  _checkResponse(res) {
    if (res.status === 200) {
      return res.json();
    }
    return Promise.reject(res);
  }


  getIngredients() {
    return fetch(`${this._url}/ingredients`)
      .then(this._checkResponse);
  }

  placeOrder(ingredients) {
    return fetch(`${this._url}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getCookie("token")
      },
      body: JSON.stringify(ingredients)
    })
      .then(this._checkResponse);
  }

  register(data) {
    return fetch(`${this._url}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(this._checkResponse);
  }

  login(data) {
    return fetch(`${this._url}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(this._checkResponse);
  }


  forgotPassword(data) {
    return fetch(`${this._url}/password-reset`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(this._checkResponse);
  }

  resetPassword(data) {
    return fetch(`${this._url}/password-reset/reset`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(this._checkResponse);
  }

  // requires authorisation token //
  changeUser(profileInfo) {
    return fetch(`${this._url}/auth/user`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getCookie("token")
      },
      body: JSON.stringify(profileInfo)
    })
      .then(this._checkResponse);
  }


  checkToken() {
    return fetch(`${this._url}/auth/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getCookie("token")
      }
    })
      .then(this._checkResponse);
  }

  // requires refresh token //

  refreshToken() {
    return fetch(`${this._url}/auth/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        token: localStorage.getItem("refreshToken")
      })
    })
      .then(this._checkResponse);
  }

  logout() {
    return fetch(`${this._url}/auth/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        token: localStorage.getItem("refreshToken")
      })
    })
      .then(this._checkResponse);
  }
}


const api = new API(config);

export default api;

