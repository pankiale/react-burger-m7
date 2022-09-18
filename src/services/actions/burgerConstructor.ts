import api from "../api/api";
import { resetIngredientCounter } from "./ingredients";
import { TIDs, TIngredients, TItem, TMoveElement } from "../types/data";
import { AppDispatch, AppThunk } from "../types";

export const ADD_INGREDIENT: "ADD_INGREDIENT" = "ADD_INGREDIENT";
export const DELETE_INGREDIENT: "DELETE_INGREDIENT" = "DELETE_INGREDIENT";
export const RESET_ALL_INGREDIENTS: "RESET_ALL_INGREDIENTS" = "RESET_ALL_INGREDIENTS";

export const SET_TOTAL_PRICE: "SET_TOTAL_PRICE" = "SET_TOTAL_PRICE";
export const RESET_TOTAL_PRICE: "RESET_TOTAL_PRICE" = "RESET_TOTAL_PRICE";

export const OPEN_ORDER_MODAL: "OPEN_ORDER_MODAL" = "OPEN_ORDER_MODAL";
export const CLOSE_ORDER_MODAL: "CLOSE_ORDER_MODAL" = "CLOSE_ORDER_MODAL";

export const PLACE_ORDER_REQUEST: "PLACE_ORDER_REQUEST" = "PLACE_ORDER_REQUEST";
export const PLACE_ORDER_SUCCESS: "PLACE_ORDER_SUCCESS" = "PLACE_ORDER_SUCCESS";
export const PLACE_ORDER_FAILED: "PLACE_ORDER_FAILED" = "PLACE_ORDER_FAILED";

export const MOVE_ELEMENT: "MOVE_ELEMENT" = "MOVE_ELEMENT";

export interface IPlaceOrderRequestAction {
  readonly type: typeof PLACE_ORDER_REQUEST;
}

export interface IPlaceOrderSuccessAction {
  readonly type: typeof PLACE_ORDER_SUCCESS;
  orderNumber: string;
}

export interface IPlaceOrderFailedAction {
  readonly type: typeof PLACE_ORDER_FAILED;
}

export interface IOpenOrderModalAction {
  readonly type: typeof OPEN_ORDER_MODAL;
}

export interface ICloseOrderModalAction {
  readonly type: typeof CLOSE_ORDER_MODAL;
}

export interface IAddIngredientAction {
  readonly type: typeof ADD_INGREDIENT;
  item: TItem;
}

export interface IDeleteIngredientAction {
  readonly type: typeof DELETE_INGREDIENT;
  item: TItem;
}

export interface IResetAllIngredientsAction {
  readonly type: typeof RESET_ALL_INGREDIENTS;
}

export interface ISetTotalPriceAction {
  readonly type: typeof SET_TOTAL_PRICE;
  value: number;
}

export interface IResetTotalPriceAction {
  readonly type: typeof RESET_TOTAL_PRICE;
}

export interface IMoveElementAction {
  readonly type: typeof MOVE_ELEMENT;
  data: TMoveElement;
}

const placeOrderRequestAction = (): IPlaceOrderRequestAction => ({
  type: PLACE_ORDER_REQUEST
});

const placeOrderSuccessAction = (orderNumber: string): IPlaceOrderSuccessAction => ({
  type: PLACE_ORDER_SUCCESS,
  orderNumber: orderNumber
});

const placeOrderFailedAction = (): IPlaceOrderFailedAction => ({
  type: PLACE_ORDER_FAILED
});

const openOrderModalAction = (): IOpenOrderModalAction => ({
  type: OPEN_ORDER_MODAL
});

export const closeOrderModalAction = (): ICloseOrderModalAction => ({
  type: CLOSE_ORDER_MODAL
});

export const addIngredientAction = (item: TIngredients, key: string): IAddIngredientAction => ({
  type: ADD_INGREDIENT,
  item: { ...item, key: key }
});

export const deleteIngredientAction = (item: TItem): IDeleteIngredientAction => ({
  type: DELETE_INGREDIENT,
  item: item
});

const resetAllIngredientsAction = (): IResetAllIngredientsAction => ({
  type: RESET_ALL_INGREDIENTS
});

export const setTotalPriceAction = (total: number): ISetTotalPriceAction => ({
  type: SET_TOTAL_PRICE,
  value: total
});

const resetTotalPriceAction = (): IResetTotalPriceAction => ({
  type: RESET_TOTAL_PRICE
});

export const moveElementAction = (dragIndex: number, hoverIndex: number): IMoveElementAction => ({
  type: MOVE_ELEMENT,
  data: { dragIndex, hoverIndex }
});


export type TConstructorActions =
  IPlaceOrderRequestAction
  | IPlaceOrderSuccessAction
  | IPlaceOrderFailedAction
  | IOpenOrderModalAction
  | ICloseOrderModalAction
  | IAddIngredientAction
  | IDeleteIngredientAction
  | IResetAllIngredientsAction
  | ISetTotalPriceAction
  | IResetTotalPriceAction
  | IMoveElementAction;


export const placeOrderThunk: AppThunk = (IDs: TIDs) => {
  return function(dispatch: AppDispatch) {
    dispatch(placeOrderRequestAction());
    api.placeOrder(IDs)
      .then(res => {
        if (res && res.success) {
          dispatch(placeOrderSuccessAction(res.order.number));
          dispatch(openOrderModalAction());
        } else {
          dispatch(placeOrderFailedAction());
        }
      })
      .then(() => {
        dispatch(resetAllIngredientsAction());
        dispatch(resetIngredientCounter());
        dispatch(resetTotalPriceAction());
      })
      .catch(err => {
        console.error(err);
        dispatch(placeOrderFailedAction());
      });
  };

}



