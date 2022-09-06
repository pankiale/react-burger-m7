import api from "../api/api";
import { TIngredients } from "../types/data";
import { AppDispatch, AppThunk } from "../types";

export const INCREASE_COUNTER: "INCREASE_COUNTER" = "INCREASE_COUNTER";
export const DECREASE_COUNTER: "DECREASE_COUNTER" = "DECREASE_COUNTER";
export const RESET_COUNTER: "RESET_COUNTER" = "RESET_COUNTER";

export const GET_ITEMS_REQUEST: "GET_ITEMS_REQUEST" = "GET_ITEMS_REQUEST";
export const GET_ITEMS_SUCCESS: "GET_ITEMS_SUCCESS" = "GET_ITEMS_SUCCESS";
export const GET_ITEMS_FAILED: "GET_ITEMS_FAILED" = "GET_ITEMS_FAILED";

export const TAB_SWITCH: "TAB_SWITCH" = "TAB_SWITCH";

export interface IGetItemsRequestAction {
  readonly type: typeof GET_ITEMS_REQUEST;
}

export interface IGetItemsSuccessAction {
  readonly type: typeof GET_ITEMS_SUCCESS;
  ingredients: ReadonlyArray<TIngredients>;
}

export interface IGetItemsFailedAction {
  readonly type: typeof GET_ITEMS_FAILED;
}

export interface ITabSwitchAction {
  readonly type: typeof TAB_SWITCH;
  value: string;
}

export interface IIncreaseIngredientCount {
  readonly type: typeof INCREASE_COUNTER;
  item: TIngredients;
}

export interface IDecreaseIngredientCount {
  readonly type: typeof DECREASE_COUNTER;
  item: TIngredients;
}

export interface IResetIngredientCount {
  readonly type: typeof RESET_COUNTER;
}

const getItemsRequestAction = (): IGetItemsRequestAction => ({
  type: GET_ITEMS_REQUEST
});

const getItemsSuccessAction = (data: ReadonlyArray<TIngredients>): IGetItemsSuccessAction => ({
  type: GET_ITEMS_SUCCESS,
  ingredients: data
});

const getItemsFailedAction = (): IGetItemsFailedAction => ({
  type: GET_ITEMS_FAILED
});

export const tabSwitchAction = (value: string): ITabSwitchAction => ({
  type: TAB_SWITCH,
  value: value
});

export const increaseIngredientCounter = (item: TIngredients): IIncreaseIngredientCount => ({
  type: INCREASE_COUNTER,
  item: item
});

export const decreaseIngredientCounter = (item: TIngredients): IDecreaseIngredientCount => ({
  type: DECREASE_COUNTER,
  item: item
});

export const resetIngredientCounter = (): IResetIngredientCount => ({
  type: RESET_COUNTER
});


export type TIngredientsActions = IGetItemsRequestAction | IGetItemsSuccessAction | IGetItemsFailedAction |
  ITabSwitchAction | IIncreaseIngredientCount | IDecreaseIngredientCount | IResetIngredientCount;

export const getItemsThunk: AppThunk = () => {
  return function(dispatch: AppDispatch) {
    dispatch(getItemsRequestAction());
    api.getIngredients()
      .then(res => {
        if (res && res.success) {
          dispatch(getItemsSuccessAction(res.data));
        } else {
          dispatch(getItemsFailedAction());
        }
      })
      .catch(err => {
        console.error(err);
        dispatch(getItemsFailedAction());
      });
  };
};
