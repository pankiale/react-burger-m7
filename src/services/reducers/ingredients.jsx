import {
  DELETE_ITEM,
  DECREASE_ITEM,
  INCREASE_ITEM,
  GET_ITEMS_FAILED,
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS
} from "../actions/ingredients";

const initialState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false
};

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS_REQUEST: {
      return {
        ...state,
        ingredientsRequest: true
      };
    }
    case GET_ITEMS_SUCCESS: {
      return { ...state, ingredientsFailed: false, ingredients: action.ingredients, ingredientsRequest: false };
    }
    case GET_ITEMS_FAILED: {
      return { ...state, ingredientsFailed: true, ingredientsRequest: false };
    }

    case INCREASE_ITEM: {
      return {
        ...state,
        ingredients: [...state.ingredients].map(item =>
          item.id === action.id ? { ...item, qty: ++item.qty } : item
        )
      };
    }
    case DECREASE_ITEM: {
      return {
        ...state,
        ingredients: [...state.ingredients].map(item =>
          item.id === action.id ? { ...item, qty: --item.qty } : item
        )
      };
    }
    case DELETE_ITEM: {
      return { ...state, ingredients: [...state.ingredients].filter(item => item.id !== action.id) };
    }
    default: {
      return state;
    }
  }
};