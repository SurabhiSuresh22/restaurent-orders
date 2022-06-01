import React, { useState } from 'react'
import FoodList from './FoodList'
import { v4 as uuid }from 'uuid'

const food = [
        {id: uuid(), dish : 'Pasta' ,price: 99 },
        {id: uuid(), dish : 'Biryani',price: 100},
        {id: uuid(), dish: 'French Fries',price: 50}
    ]

const Orders = () => {
  const [items, setItems] = useState(food)

  return (
    <div> 
        <h1>Delicious foods!</h1>
        <p>Good Food, Good Life</p> 
      <div>
          <FoodList items={items}/>
      </div>  
    </div>
  )
}

export default Orders