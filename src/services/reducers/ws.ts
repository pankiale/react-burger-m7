import {
  WS_CONNECTION_OPEN,
  WS_GET_MESSAGE,
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CLEAR_STORE, TWsActions
} from "../actions/ws";
import { TOrders } from "../types/data";

export type TWsState = {
  wsConnection: boolean;
  orders: Array<TOrders> | null;
  total: number | null;
  totalToday: number | null
  error: undefined;
}

const initialState = {
  wsConnection: false,
  orders: null,
  total: null,
  totalToday: null,
  error: undefined
};

export const wsReducer = (state = initialState, action: TWsActions): TWsState => {
  switch (action.type) {
    case WS_CONNECTION_OPEN:
      return {
        ...state,
        wsConnection: true,
      };
    case WS_CONNECTION_ERROR:
      return {
        ...state,
        wsConnection: false,
        error: action.payload,
      };
    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        wsConnection: false,
      };
    case WS_GET_MESSAGE:
      return {
        ...state,
        orders: action.payload.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday,
      };
    case WS_CLEAR_STORE:
      return {
        ...state,
        orders: null,
      };
    default:
      return state;
  }
};
