import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { TIngredientsActions } from "../actions/ingredients";
import { store } from "../store/store";
import { TConstructorActions } from "../actions/burgerConstructor";
import { TAuthActions } from "../actions/auth";
import { TWsActions } from "../actions/ws";
import { Action, ActionCreator } from "redux";
import 'redux-thunk/extend-redux';

type TApplicationActions = TIngredientsActions | TConstructorActions | TAuthActions | TWsActions;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = Promise<any> | void> = ActionCreator<
  ThunkAction<ReturnType, Action, RootState, TApplicationActions>
  >;
/*
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  TApplicationActions
  >;

export type AppDispatch = ThunkDispatch<RootState, never, TApplicationActions>;*/
