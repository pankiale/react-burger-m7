import { getCookie } from "../../utils/cookie";

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
    return res.json().then(res => {
      throw res.message
    });
  }


  getIngredients() {
    return fetch(`${this._url}/ingredients`)
      .then(this._checkResponse);
  }

  placeOrder(ingredients) {
    return fetch(`${this._url}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
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

  logout(data) {
    return fetch(`${this._url}/auth/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({token: data})
    })
      .then(this._checkResponse)
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

  checkToken() {
    return fetch(`${this._url}/auth/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getCookie("token")
      }
    })
      .then(res => {
        this._checkResponse(res)
        return res
      });
    }

  refreshToken() {
    return fetch(`${this._url}/auth/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
          token: localStorage.getItem('refreshToken'),
        }),
    })
      .then(this._checkResponse);
  }


  }


const api = new API(config);

export default api;

