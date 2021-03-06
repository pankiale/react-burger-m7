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
  TOGGLE_ORDER_MODAL
} from "../actions/burgerConstructor";

const initialState = {
  burgerConstructorIngredients: [],
  burgerConstructorBuns: [],
  totalPrice: "",
  isModalOpen: false,
  orderRequest: false,
  orderRequestFailed: false,
  orderNumber: ""
};

export const burgerConstructorReducer = (state = initialState, action) => {
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
    case TOGGLE_ORDER_MODAL: {
      return {
        ...state,
        isModalOpen: !state.isModalOpen
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
        orderNumber: action.payload,
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