import React from 'react'
import './Fooditems.css'

const FoodItems = ({item,handleOrder}) => {
    const {id,dish, price} = item;

    return (
        <li className='item' onClick={handleOrder} >
            <div className="info">
                <span className='dish'>{dish}</span>
                <span className='price'>{price}</span>
            </div>         
            <button onClick={()=> handleOrder(id)}> Add</button>
        </li>
    )
}

export default FoodItems
