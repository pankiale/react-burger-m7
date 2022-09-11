import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_INIT,
  WS_CONNECTION_OPEN,
  WS_GET_MESSAGE
} from "../services/actions/ws";

export const wsUrl = "wss://norma.nomoreparties.space/orders";


export interface IWsActions {
  readonly wsInit: typeof WS_CONNECTION_INIT;
  readonly onOpen: typeof WS_CONNECTION_OPEN;
  readonly onMessage: typeof WS_GET_MESSAGE;
  readonly onClose: typeof WS_CONNECTION_CLOSED;
  readonly onError: typeof WS_CONNECTION_ERROR;
}


export const wsActions: IWsActions = {
  wsInit: WS_CONNECTION_INIT,
  onOpen: WS_CONNECTION_OPEN,
  onMessage: WS_GET_MESSAGE,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
};
