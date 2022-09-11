import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_INIT,
  WS_CONNECTION_OPEN,
  WS_GET_MESSAGE
} from "../services/actions/ws";


export const wsUrl = "wss://norma.nomoreparties.space/orders";

export const wsActions = {
  wsInit: WS_CONNECTION_INIT,
  onOpen: WS_CONNECTION_OPEN,
  onMessage: WS_GET_MESSAGE,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
};
