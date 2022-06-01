import React from 'react'
import { Link } from 'react-router-dom'
import './CurrentOrder.css'

const CurrentOrder = ({order,total}) => {
  return (
    <div className='CO'>
      <h2>CurrentOrder</h2>
      <Link className="nav-item nav-link" to='/'>Home</Link>
      <div className='summary'>
        <h3>Order Summary</h3>
        <h4>Your dish: {order}</h4>
        <h5>Pay Rs: {total}</h5>
      </div>
    </div>
  )
}

export default CurrentOrder