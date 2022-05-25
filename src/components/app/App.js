import { useEffect, useState } from 'react';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/BurgerConstructor';
import api from '../../api/api';
import './App.css';
import Card from '../card/card';

function App() {

  const [searchQuery, setSearchQuery] = useState('cat')
  const [cards, setCards] = useState([])

  useEffect(()=>{
    handleRequest()
  }, [])

  const handleFormSubmit = (e) => {
    e.preventDefault()
    handleRequest()
  }

  const handleInputChange = (value) => {
    setSearchQuery(value)
  }

  const handleRequest = () => {
    api
    .fetch()
    .then ((response) => { 
      const card = response.data.map(item=>item)
        /*return card
        return item.type === 'bun'? {bun: item} : 
        item.type === 'sauce'? {sauce: item} :
        item.type === 'main' ? {main: item} : {}
        })*/
      setCards(card)
      })
  }

  return (
    <div className='app'>
      <AppHeader/>
      <div className='app__content'>

      <BurgerConstructor/>
  
        <div className='app__cards'>

          {cards.filter(item => item.type === 'bun').map(item => {
          return (
          <Card 
            key={item._id}
            {...item}
          />
          )
        })}
          {cards.filter(item => item.type === 'sauce').map(item => {
          return (
          <Card 
            key={item._id}
            {...item}
          />
          )
        })}
          {cards.filter(item => item.type === 'main').map(item => {
          return (
          <Card 
            key={item._id}
            {...item}
          />
          )
        })}
        </div>
      
      </div>
    </div>
  );
}

export default App;
