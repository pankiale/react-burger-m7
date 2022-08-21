import { combineReducers } from 'redux';
import { ingredientsReducer } from "./ingredients";
import { burgerConstructorReducer } from "./burgerConstructor";
import { authReducer } from "./auth";
import { wsReducer } from "./ws";
export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  burgerConstructorIngredients: burgerConstructorReducer,
  auth: authReducer,
  ws: wsReducer
});