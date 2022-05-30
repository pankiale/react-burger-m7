const config = {
    url: "https://norma.nomoreparties.space/api/ingredients"
}

class API {
    constructor ({url}){
        this._url = url;
    }

    fetch () {
        return fetch(`${this._url}`)
        .then (response => response.json()); 
        
    }
}
const api = new API (config);

export default api;
 