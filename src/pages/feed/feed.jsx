import styles from "./feed.module.css";
import { useDispatch, useSelector } from "react-redux";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import { useEffect } from "react";
import { WS_CLEAR_STORE, WS_CONNECTION_CLOSED, WS_CONNECTION_INIT } from "../../services/actions/ws";
import FeedOrders from "../../components/feed/feed-orders";
import FeedSummary from "../../components/feed/feed-summary";

const Feed = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((store) => store.ws);
console.log(orders)
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

  return (
    <main className={styles.app__main}>
      {orders && (
        <>
          <FeedOrders />
          <FeedSummary />
        </>
      )}
    </main>
  );
};

export default Feed;
