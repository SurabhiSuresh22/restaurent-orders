import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <p className="navbar-brand">Yum Foods</p>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav">
            <li className='nav-item'><Link className="nav-link" to='/OrderSummary'>Order Summary</Link></li>
            <li className='nav-item'><Link className="nav-item nav-link" to='/PastOrders'>Past Orders</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
