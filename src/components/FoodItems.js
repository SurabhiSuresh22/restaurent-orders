import React, { useState } from 'react'
import './Fooditems.css'

const FoodItems = ({item,handleOrder,add}) => {
    const {dish, price} = item;

    return (
        <li className='item' >
            <div className="info">
                <span className='dish'>{dish}</span>
                <span className='price'>{price}</span>
            </div>   
            <button onClick={handleOrder}>Add</button>
        </li>
    )
}

export default FoodItems