import { ADD_INGREDIENT, DELETE_INGREDIENT } from "../actions/burgerConstructor";

const initialState = {
  burgerConstructorIngredients: [
  ],
};

export const burgerConstructorReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_INGREDIENT: {
      return {
        ...state,
        burgerConstructorIngredients: [...state.burgerConstructorIngredients, action.item]
      };
    }
    case DELETE_INGREDIENT: {
        return { ...state, burgerConstructorIngredients: [...state.burgerConstructorIngredients].filter(item => item._id !== action.item._id) };
      };

    default: {
      return state;
    }
  }
};