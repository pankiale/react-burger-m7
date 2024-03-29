import {
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  MOVE_ELEMENT,
  PLACE_ORDER_FAILED,
  PLACE_ORDER_REQUEST,
  PLACE_ORDER_SUCCESS,
  RESET_ALL_INGREDIENTS,
  RESET_TOTAL_PRICE,
  SET_TOTAL_PRICE,
  CLOSE_ORDER_MODAL, OPEN_ORDER_MODAL, TConstructorActions
} from "../actions/burgerConstructor";
import { TItem } from "../types/data";

export type TConstructorState = {
  burgerConstructorIngredients: ReadonlyArray<TItem>,
  burgerConstructorBuns: ReadonlyArray<TItem>,
  totalPrice: number,
  isModalOpen: boolean,
  orderRequest: boolean,
  orderRequestFailed: boolean,
  orderNumber: string
};


const initialState: TConstructorState = {
  burgerConstructorIngredients: [],
  burgerConstructorBuns: [],
  totalPrice: 0,
  isModalOpen: false,
  orderRequest: false,
  orderRequestFailed: false,
  orderNumber: ""
};

export const burgerConstructorReducer = (state = initialState, action: TConstructorActions): TConstructorState => {
  switch (action.type) {

    case ADD_INGREDIENT: {
      if (action.item.type !== "bun") {
        return {
          ...state,
          burgerConstructorIngredients: [...state.burgerConstructorIngredients, action.item]
        };
      } else {
        return {
          ...state,
          burgerConstructorBuns: [action.item]
        };
      }
    }
    case DELETE_INGREDIENT: {
      return {
        ...state,
        burgerConstructorIngredients: [...state.burgerConstructorIngredients].filter(item => item.key !== action.item.key)
      };
    }
    case RESET_ALL_INGREDIENTS: {
      return {
        ...state,
        burgerConstructorIngredients: [],
        burgerConstructorBuns: []
      };
    }
    case MOVE_ELEMENT: {
      const ingredients = [...state.burgerConstructorIngredients];
      ingredients.splice(action.data.dragIndex, 0, ingredients.splice(action.data.hoverIndex, 1)[0]);
      return {
        ...state, burgerConstructorIngredients: ingredients
      };
    }
    case SET_TOTAL_PRICE: {
      return {
        ...state,
        totalPrice: action.value
      };
    }
    case RESET_TOTAL_PRICE: {
      return {
        ...state,
        totalPrice: 0
      };
    }
    case OPEN_ORDER_MODAL: {
      return {
        ...state,
        isModalOpen: true
      };
    }
    case CLOSE_ORDER_MODAL: {
      return {
        ...state,
        isModalOpen: false
      };
    }
    case PLACE_ORDER_REQUEST: {
      return {
        ...state,
        orderRequest: true
      };
    }
    case PLACE_ORDER_SUCCESS: {
      return {
        ...state,
        orderRequestFailed: false,
        orderNumber: action.orderNumber,
        orderRequest: false
      };
    }
    case PLACE_ORDER_FAILED: {
      return { ...state, orderRequestFailed: true, orderRequest: false };
    }
    default: {
      return state;
    }
  }
};