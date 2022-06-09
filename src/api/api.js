const config = {
    url: "https://norma.nomoreparties.space/api/ingredients"
}

class API {
    constructor ({url}){
        this._url = url;
    }

    _checkResponse(res) {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
      }


    getIngredients () {
        return fetch(`${this._url}`)
        .then ( this._checkResponse) 
    }
}
const api = new API (config);

export default api;
 