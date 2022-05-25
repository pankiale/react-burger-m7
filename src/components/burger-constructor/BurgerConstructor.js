import React from 'react';
import { useEffect, useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'

function BurgerConstructor () {

const [current, setCurrent] = React.useState('bun')

return (
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
        )
}


export default BurgerConstructor;