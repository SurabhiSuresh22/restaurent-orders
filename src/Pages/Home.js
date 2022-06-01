import React from 'react'
import Orders from '../components/Orders'
import Navbar from '../components/Navbar'

const Home = ({items,order,total,handleOrder}) => {
  return (
    <div>
        <Navbar/>
        <Orders items={items} order={order} total={total} handleOrder={handleOrder}/>
    </div>
  )
}

export default Home