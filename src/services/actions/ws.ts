export const WS_CONNECTION_INIT: "WS_CONNECTION_INIT" = "WS_CONNECTION_INIT";
export const WS_CONNECTION_OPEN: "WS_CONNECTION_OPEN" = "WS_CONNECTION_OPEN";
export const WS_GET_MESSAGE: "WS_GET_MESSAGE" = "WS_GET_MESSAGE";
export const WS_CONNECTION_CLOSED: "WS_CONNECTION_CLOSED" = "WS_CONNECTION_CLOSED";
export const WS_CONNECTION_ERROR: "WS_CONNECTION_ERROR" = "WS_CONNECTION_ERROR";
export const WS_CLEAR_STORE: "WS_CLEAR_STORE" = "WS_CLEAR_STORE";


export interface IWsConnectionInitAction {
  readonly type: typeof WS_CONNECTION_INIT;
  payload: string;
}
export interface IWsConnectionOpenAction {
  readonly type: typeof WS_CONNECTION_OPEN;
}
export interface IWsGetMessageAction {
  readonly type: typeof WS_GET_MESSAGE;
}
export interface IWsConnectionClosedAction {
  readonly type: typeof WS_CONNECTION_CLOSED;
}
export interface IWsConnectionErrorAction {
  readonly type: typeof WS_CONNECTION_ERROR;
  payload: any;
}
export interface IWsClearStoreAction {
  readonly type: typeof WS_CLEAR_STORE;
}

export type TWsActions =
  IWsConnectionInitAction
  | IWsConnectionOpenAction
  | IWsGetMessageAction
  | IWsConnectionClosedAction
  | IWsConnectionErrorAction
  | IWsClearStoreAction;
