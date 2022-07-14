import {
  DECREASE_COUNTER,
  INCREASE_COUNTER,
  GET_ITEMS_FAILED,
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS, TAB_SWITCH, TOGGLE_MODAL
} from "../actions/ingredients";

const initialState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
  currentTab: "bun",
  isModalOpen: false
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
    case TAB_SWITCH: {
      return {
        ...state,
        currentTab: action.value
      };
    }
    case TOGGLE_MODAL: {
      return {
        ...state,
        isModalOpen: !state.isModalOpen
      };
    }
    default: {
      return state;
    }
  }
};