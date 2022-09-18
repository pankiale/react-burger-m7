import styles from "./feed.module.css";
import { useEffect } from "react";
import { WS_CLEAR_STORE, WS_CONNECTION_CLOSED, WS_CONNECTION_INIT } from "../../services/actions/ws";
import FeedOrders from "../../components/feed/feed-orders";
import FeedSummary from "../../components/feed/feed-summary";
import { useDispatch, useSelector } from "../../services/hooks/hooks";

const Feed = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((store) => store.ws);

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
