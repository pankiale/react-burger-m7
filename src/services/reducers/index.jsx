import { combineReducers } from 'redux';
import { ingredientsReducer } from "./ingredients";
import { burgerConstructorReducer } from "./burgerConstructor";
export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  burgerConstructorIngredients: burgerConstructorReducer
});