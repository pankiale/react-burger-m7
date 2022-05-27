import { useEffect, useState } from "react";
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import api from "../../api/api";
import styles from "./app.module.css";
import Card from "../card/card";
import { data } from "../../utils/data";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";

const cards = data;

function App() {
  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.app__main}>
        <BurgerIngredients data={cards} />
        <BurgerConstructor data={cards} />
      </main>
    </div>
  );
}

export default App;
