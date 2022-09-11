import { IWsActions } from "../../utils/ws";
import { Middleware } from "redux";

export const socketMiddleware = (wsUrl:string, wsActions:IWsActions): Middleware => {
  return (store) => {
    let socket: WebSocket | null = null;

    const { wsInit, onOpen, onClose, onError, onMessage } = wsActions;

    return (next) => (action) => {
      const { dispatch } = store;
      const { type, payload } = action;

      if (type === wsInit) {
        socket = new WebSocket(`${wsUrl}${payload}`);
      }

      if (type === onClose) {
        // @ts-ignore
        socket.close();
      }

      if (socket) {
        socket.onopen = (event:Event) => {
          dispatch({ type: onOpen, payload: event });
        };

        socket.onerror = (event:Event) => {
          dispatch({ type: onError, payload: event });
          console.log("Ошибка соединения");
        };

        socket.onmessage = (event:MessageEvent) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;

          dispatch({ type: onMessage, payload: restParsedData });
        };

        socket.onclose = (event:CloseEvent) => {
          dispatch({ type: onClose, payload: event });
        };
      }

      next(action);
    };
  };
};
