import React from 'react'
import { Link } from 'react-router-dom'
import './PastOrders.css'

const PastOrders = ({past}) => {
  // console.log(past)
  return (
    <div className='PO'>
      <h2>PastOrders</h2>
      <Link className="nav-item nav-link" to='/'>Home</Link>
      <div className="pastOrders">
          {past.map((e)=>{
            return <h5>{e}</h5>
          })}
      </div>
    </div>

  )
}

export default PastOrders