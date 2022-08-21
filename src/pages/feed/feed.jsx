import styles from "./feed.module.css";
import { useDispatch, useSelector } from "react-redux";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import { useEffect } from "react";
import { WS_CLEAR_STORE, WS_CONNECTION_CLOSED, WS_CONNECTION_INIT } from "../../services/actions/ws";
import FeedOrders from "../../components/feed/feed-orders";

const Feed = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((store) => store.ws);

  //запускаем ws
  useEffect(() => {
    if (!orders) {
      dispatch({
        type: WS_CONNECTION_INIT,
        payload: "/all"
      });

      return () => {
        dispatch({ type: WS_CONNECTION_CLOSED });
      };
    }
  }, [dispatch, orders]);

  //очистка ws
  useEffect(() => {
    dispatch({ type: WS_CLEAR_STORE });
  }, [dispatch]);

  console.log(orders);

  return (
    <main className={styles.app__main}>
      {orders && (
        <>
          <FeedOrders />

        </>
      )}
    </main>
  );
};

export default Feed;
