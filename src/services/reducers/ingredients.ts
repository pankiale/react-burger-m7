import {
  DECREASE_COUNTER,
  INCREASE_COUNTER,
  GET_ITEMS_FAILED,
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS, TAB_SWITCH, RESET_COUNTER, TIngredientsActions
} from "../actions/ingredients";
import { TIngredients } from "../types/data";

export type TIngredientsState = {
  ingredients: ReadonlyArray<TIngredients>,
  ingredientsRequest: boolean,
  ingredientsFailed: boolean,
  currentTab: string,
};

const initialState: TIngredientsState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
  currentTab: "bun",
};

export const ingredientsReducer = (state = initialState, action: TIngredientsActions):TIngredientsState => {
  switch (action.type) {
    case GET_ITEMS_REQUEST: {
      return {
        ...state,
        ingredientsRequest: true
      };
    }
    case GET_ITEMS_SUCCESS: {
      return {
        ...state,
        ingredientsFailed: false,
        ingredients: [...action.ingredients].map(item => ({ ...item, counter: 0 })),
        ingredientsRequest: false
      };
    }
    case GET_ITEMS_FAILED: {
      return { ...state, ingredientsFailed: true, ingredientsRequest: false };
    }

    case INCREASE_COUNTER: {
      return {
        ...state,
        ingredients: [...state.ingredients].map(item =>
          item._id === action.item._id && action.item.type === "bun" ? { ...item, counter: item.counter + 2 } :
            item._id === action.item._id ? { ...item, counter: item.counter + 1 } :
              item
        )
      };
    }
    case DECREASE_COUNTER: {
      return {
        ...state,
        ingredients: [...state.ingredients].map(item =>
          item._id === action.item._id && action.item.type === "bun" ? { ...item, counter: item.counter - 2 } :
            item._id === action.item._id ? { ...item, counter: item.counter - 1 } :
            item
        )
      };
    }
    case RESET_COUNTER: {
      return {
        ...state,
        ingredients: [...state.ingredients].map(item =>
          ({ ...item, counter: 0 })
        )
      };
    }
    case TAB_SWITCH: {
      return {
        ...state,
        currentTab: action.value
      };
    }
    default: {
      return state;
    }
  }
};