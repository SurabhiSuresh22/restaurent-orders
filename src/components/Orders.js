import React, { useState } from 'react'
import FoodList from './FoodList'

// const food = [
//         {id: uuid(), dish : 'Pasta' ,price: 99 },
//         {id: uuid(), dish : 'Biryani',price: 100},
//         {id: uuid(), dish: 'French Fries',price: 50}
//     ]

const Orders = ({items,order,total,handleOrder}) => {
  // const [items, setItems] = useState(food)

  return (
    <div> 
        <h1>Delicious foods!</h1>
        <p>Good Food, Good Life</p> 
      <div>
          <FoodList items={items} order={order} total={total} handleOrder={handleOrder}/>
      </div>  
    </div>
  )
}

export default Orders