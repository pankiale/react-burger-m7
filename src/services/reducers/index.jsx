import { combineReducers } from 'redux';
import { ingredientsReducer } from "./ingredients";
import { burgerIngredientsReducer } from "./burgerIngredients";
import { burgerConstructorReducer } from "./burgerConstructor";
export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  burgerIngredients: burgerIngredientsReducer,
  burgerConstructorIngredients: burgerConstructorReducer
});