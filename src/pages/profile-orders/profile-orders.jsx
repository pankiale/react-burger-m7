import { NavLink} from "react-router-dom";
import styles from "./profile_orders.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { WS_CONNECTION_CLOSED, WS_CONNECTION_INIT } from "../../services/actions/ws";
import { getCookie } from "../../utils/cookie";
import { GET_LOGOUT_FAILED, getLogoutThunk } from "../../services/actions/auth";
import FeedOrders from "../../components/feed/feed-orders";
import ProfileOrders from "../../components/profile/profile-orders";

export function ProfileOrdersPage() {
  const orders = useSelector((store) => store.ws.orders || undefined);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch({
        type: WS_CONNECTION_INIT,
        payload: `?token=${getCookie("token")}`,
      });

      return () => {
        dispatch({ type: WS_CONNECTION_CLOSED });
      };
  }, [dispatch, orders]);

  const handleLogout = () => {
    dispatch(getLogoutThunk())
      .catch((err) => {
        console.error("Что то пошло не так", err);
        dispatch({
          type: GET_LOGOUT_FAILED
        });
      });
  };
  return (
    <div className={styles.wrapper_container}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <NavLink to={{ pathname: "/profile" }} exact activeClassName={styles.link_active}
                   className={`text text_type_main-medium text_color_inactive ${styles.link}`}>Профиль</NavLink>
          <NavLink to={{ pathname: "/profile/orders" }} activeClassName={styles.link_active}
                   className={`text text_type_main-medium text_color_inactive ${styles.link}`}>История Заказов</NavLink>
          <NavLink to={{ pathname: "/" }} exact activeClassName={styles.link_active} onClick={handleLogout}
                   className={`text text_type_main-medium text_color_inactive ${styles.link}`}>Выход</NavLink>
          <p className={"text text_type_main-small text_color_inactive mt-20"}>В этом разделе вы можете
            изменить свои персональные данные</p>
        </nav>

        <div className={styles.form}>
          <div className={styles.wrapper}>
            <div>
              <ProfileOrders />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}