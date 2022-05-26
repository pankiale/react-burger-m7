import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import { checkPropTypes } from 'prop-types';
import Card from '../card/card';
import styles from './burger-ingredients.module.css'

function BurgerIngredients (props) {

const [current, setCurrent] = React.useState('bun')
const screenHeight = window.screen.height

const IngredientList = ({title, ingredient, props}) => {
  return (
      <div className={styles.ingredients__item}>
          <p className='text text_type_main-medium'>{title}</p>
          <ul className={`${styles.ingredients__list} pl-4 pr-4 pt-6`}>
          {props.data.filter(item => item.type === ingredient).map(item => {
          return (
            <li>
          <Card 
            key={item._id}
            {...item}
          />
          </li>
          )
        })}
        
          </ul>
          </div>
  )
}

return (
    <section className={`${styles.ingredients__section} pl-5 pr-5 pt-8 pb-8`}>
      <h1 className="text text_type_main-large mb-5"> Соберите бургер</h1>
    <div style={{ display: 'flex' }}>
        <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
           Булки
        </Tab>
        <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
            Соусы
        </Tab>
        <Tab value="main" active={current === 'main'} onClick={setCurrent}>
            Начинка
        </Tab>
    </div>
         <IngredientList title='Булки' ingredient='bun' props={props}/>
         <IngredientList title='Соусы' ingredient='sauce' props={props}/>
         <IngredientList title='Начинки' ingredient='main' props={props}/>
    </section>
        )
}


export default BurgerIngredients;