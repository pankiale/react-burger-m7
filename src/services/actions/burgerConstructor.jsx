import api from "../api/api";
import { RESET_COUNTER } from "./ingredients";

export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const DELETE_INGREDIENT = "DELETE_INGREDIENT";
export const RESET_ALL_INGREDIENTS = 'RESET_ALL_INGREDIENTS';

export const SET_TOTAL_PRICE = "SET_TOTAL_PRICE";
export const RESET_TOTAL_PRICE = 'RESET_TOTAL_PRICE';

export const OPEN_ORDER_MODAL = 'OPEN_ORDER_MODAL';
export const CLOSE_ORDER_MODAL = "CLOSE_ORDER_MODAL";

export const PLACE_ORDER_REQUEST = "PLACE_ORDER_REQUEST";
export const PLACE_ORDER_SUCCESS = "PLACE_ORDER_SUCCESS";
export const PLACE_ORDER_FAILED = "PLACE_ORDER_FAILED";

export const MOVE_ELEMENT = "MOVE_ELEMENT";

export function placeOrder(IDs) {
  return function(dispatch) {
    dispatch({
      type: PLACE_ORDER_REQUEST
    });
    setTimeout( ()=> {api.placeOrder(IDs)
      .then(res => {
        if (res && res.success) {
          dispatch({
            type: PLACE_ORDER_SUCCESS,
            payload: res.order.number
          });
          dispatch({
            type: OPEN_ORDER_MODAL
          });
        } else {
          dispatch({
            type: PLACE_ORDER_FAILED
          });
        }
      })
      .then(() => {
        dispatch({
          type: RESET_ALL_INGREDIENTS
        });
        dispatch({
          type: RESET_COUNTER
        });
        dispatch({
          type: RESET_TOTAL_PRICE
        });
      })
      .catch(err => {
        console.error(err);
        dispatch({
          type: PLACE_ORDER_FAILED
        });
      });
    }, 1000 )
  };

}



