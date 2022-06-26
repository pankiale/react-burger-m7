const config = {
    url: "https://norma.nomoreparties.space/api"
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
        return fetch(`${this._url}/ingredients`)
        .then ( this._checkResponse) 
    }

    placeOrder (ingredients) {
        return fetch (`${this._url}/orders`,{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json' },
            body: JSON.stringify(ingredients)
        })
          .then ( this._checkResponse)
    }


}
const api = new API (config);

export default api;
 