import React from 'react';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import Card from '../card/card';
import styles from './burger-constructor.module.css'

function BurgerConstructor (props) {

const [current, setCurrent] = React.useState('bun')

const IngredientList = ({title, ingredient, props}) => {
  return (
      <div className={styles.ingredients__item}>
          <ul className={styles.ingredients__list}>
          {props.data.filter(item => item.type === ingredient).map(item => {
          return (
            <li key={item._id}>
          <DragIcon type="primary" />    
          <ConstructorElement 
          text={item.name}
          price={item.price}
          thumbnail={item.image}
          />
          </li>
          )
        })}
        
          </ul>
          </div>
  )
}

return (
    <section className={`${styles.ingredients__section} pl-5 pr-4 pt-25 pb-13`}>

    <div style={{ display: 'flex' }}>

    </div>

         <IngredientList title='Соусы' ingredient='sauce' props={props}/>
    </section>
        )
}


export default BurgerConstructor;