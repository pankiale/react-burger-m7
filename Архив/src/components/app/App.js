import { useEffect, useState } from 'react';
import AppHeader from '../app-header/app-header';
import Input from '../burger-constructor/BurgerConstructor';
import api from '../../api/api';
import './App.css';
import Card from '../burger-ingredients/BurgerIngredients';

import { Box } from '@ya.praktikum/react-developer-burger-ui-components'

function App() {

  const [searchQuery, setSearchQuery] = useState('cat')
  const [cards, setCards] = useState([])
  const [isLoading, setIsLoading] = useState(false)

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
    setIsLoading(true)
    api
    .search({
      query: searchQuery
    })
    .then(response => {
      console.log('response:', response)
      const cards = response.results.map(item => {
        return {
          id: item.id,
          src: item.urls.regular,
          author: item.user.name,
          title: item.description,
        }
      })
      setCards(cards)
    })
    .finally(()=>{
      setIsLoading(false)
    })
  }
console.log(cards)

  return (
    <div className='app'>
      <AppHeader/>
      <div className='app__content'>
      <div style={{ backgroundColor: '#4c4cff' }} className="p-1">
  Burger shop
</div>
        
      </div>
    </div>
  );
}

export default App;
