import { IWsActions } from "../../utils/ws";
import { Middleware, MiddlewareAPI } from "redux";
import { AppDispatch, RootState } from "../types";

export const socketMiddleware = (wsUrl:string, wsActions:IWsActions): Middleware => {
  return (store: MiddlewareAPI<AppDispatch, RootState>) => {
    //при добавлении типизации стор возникает ошибка типизации диспатча error лечится заментой Event to any. в чем причина?
    let socket: WebSocket | null = null;

    const { wsInit, onOpen, onClose, onError, onMessage } = wsActions;

    return (next) => (action) => {
      const { dispatch } = store;
      const { type, payload } = action;

      if (type === wsInit) {
        socket = new WebSocket(`${wsUrl}${payload}`);
      }

      if (socket) {
        socket.onopen = (event:Event) => {
          dispatch({ type: onOpen, payload: event });
        };

        if (type === onClose) {
          socket.close();
        };

        socket.onerror = (event:any) => {
          console.log(event)
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
