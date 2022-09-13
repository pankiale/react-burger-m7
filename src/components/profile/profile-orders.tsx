import styles from "./profile_orders.module.css";
import ProfileOrderCard from "./profile_order-card";
import { useSelector } from "../../services/hooks/hooks";
import { TOrders } from "../../services/types/data";

function ProfileOrders() {
  const { orders }
    = useSelector(
    store => store.ws
  ) as {orders: Array<TOrders>};
if (orders) {
  return (
    <>
      <section
        className={`${styles.ingredients__section} pl-4 pr-5 pb-8`}
      >
        <div className={styles.ingredients__menu}>
          <ul className={`${styles.ingredients__list} pl-4 pr-4`}>
            {orders
              .reverse()
              .map((item) => {
                return (
                  <li key={item._id}>
                    <ProfileOrderCard data={item} />
                  </li>
                );
              })}
          </ul>
        </div>
      </section>
    </>
  );
} else return null;
}

export default ProfileOrders;
