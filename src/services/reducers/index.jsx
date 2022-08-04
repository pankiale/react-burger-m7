import { combineReducers } from 'redux';
import { ingredientsReducer } from "./ingredients";
import { burgerConstructorReducer } from "./burgerConstructor";
import { authReducer } from "./auth";
export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  burgerConstructorIngredients: burgerConstructorReducer,
  auth: authReducer
});