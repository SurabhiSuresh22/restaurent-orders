import React from 'react'
import FoodItems from './FoodItems'
import './FoodList.css'

const FoodList = ({items,order,total,handleOrder}) => {

  // const [order, setOrder] = useState('')
  // const [total, setTotal] = useState(0)

  // const handleOrder = (id) =>{
  //   let i = items.find( item => item.id === id)
  //   console.log(i)
  //   let {dish,price} = i
  //   setOrder(dish)
  //   setTotal(price)
  // }

  return (
    <div className='foods'>
    <h2>Available Items</h2>
    <ul className='Items'>
        {items.map( item =>{
            return <FoodItems handleOrder={handleOrder} key={item.id} item={item}/>
        })}
    </ul>
    </div>
  )
}

export default FoodList
