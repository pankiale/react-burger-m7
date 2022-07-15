import api from "../../api/api";

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const SET_TOTAL_PRICE = 'SET_TOTAL_PRICE';
export const TOGGLE_ORDER_MODAL = 'TOGGLE_ORDER_MODAL';

export const PLACE_ORDER_REQUEST = 'PLACE_ORDER_REQUEST';
export const PLACE_ORDER_SUCCESS = 'PLACE_ORDER_SUCCESS';
export const PLACE_ORDER_FAILED = 'PLACE_ORDER_FAILED';

export function placeOrder(IDs) {
  return function(dispatch) {
    dispatch({
      type: PLACE_ORDER_REQUEST
    });
    api.placeOrder(IDs).then(res => {
      if (res && res.success) {
        dispatch({
          type: PLACE_ORDER_SUCCESS,
          payload: res.order.number
        });
        dispatch({
          type: TOGGLE_ORDER_MODAL
        });
      } else {
        dispatch({
          type: PLACE_ORDER_FAILED
        });
      }
    });
  };
}



