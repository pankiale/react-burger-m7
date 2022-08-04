import api from "../api/api";

export const INCREASE_COUNTER = "INCREASE_COUNTER";
export const DECREASE_COUNTER = "DECREASE_COUNTER";
export const RESET_COUNTER = 'RESET_COUNTER';

export const GET_ITEMS_REQUEST = "GET_ITEMS_REQUEST";
export const GET_ITEMS_SUCCESS = "GET_ITEMS_SUCCESS";
export const GET_ITEMS_FAILED = "GET_ITEMS_FAILED";

export const TAB_SWITCH = "TAB_SWITCH";
export const TOGGLE_MODAL = "TOGGLE_MODAL";


export function getItems() {
  return function(dispatch) {
    dispatch({
      type: GET_ITEMS_REQUEST
    });
    api.getIngredients()
      .then(res => {
        if (res && res.success) {
          dispatch({
            type: GET_ITEMS_SUCCESS,
            ingredients: res.data
          });
        } else {
          dispatch({
            type: GET_ITEMS_FAILED
          });
        }
      })
      .catch(err => {
        console.error(err);
        dispatch({
          type: GET_ITEMS_FAILED
        });
      });
  };
}
