import styles from "./profile_orders.module.css";
import { useSelector } from "react-redux";
import ProfileOrderCard from "./profile_order-card";

function ProfileOrders() {
  const { orders }
    = useSelector(
    store => store.ws
  );
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
