import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import { TIngredientsActions } from "../actions/ingredients";
import { store } from "../store";
import { TConstructorActions } from "../actions/burgerConstructor";
import { TAuthActions } from "../actions/auth";

type TApplicationActions = TIngredientsActions | TConstructorActions | TAuthActions;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, Action, RootState, TApplicationActions>
  >;