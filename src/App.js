import Home from './Pages/Home';
import React,{useState} from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import './App.css';
import CurrentOrder from './components/CurrentOrder';
import PastOrders from './components/PastOrders';
import Navbar from './components/Navbar';
import { v4 as uuid }from 'uuid'

function App() {
  const [order, setOrder] = useState('')
  const [total, setTotal] = useState(0)
  const [past, setPast]  = useState([])

  const food = [
        {id: uuid(), dish : 'Pasta' ,price: 99 },
        {id: uuid(), dish : 'Biryani',price: 100},
        {id: uuid(), dish: 'French Fries',price: 50}
    ]
  const [items, setItems] = useState(food)

  const handleOrder = (id) =>{
    let i = items.find( item => item.id === id)
<<<<<<< HEAD
    let {dish,price} = i 
    setOrder(dish)
    setTotal(price)
    setPast([...past,dish])
=======
    console.log(i)
    let {dish,price} = i
    past = [...past,dish]
    setOrder(dish)
    setTotal(price)
>>>>>>> da8300067949a5e4a23d3231d6638977b2ab5fce
  }

  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
            <Route exact path='/' element={<Home order={order} items={items} total={total} handleOrder={handleOrder}/>}></Route>
            <Route exact path='/OrderSummary' element={<CurrentOrder order={order}  total={total}/>}></Route>
<<<<<<< HEAD
            <Route exact path='/PastOrders' element={<PastOrders past={past}/>}></Route>
=======
            <Route exact path='/PastOrders' element={<PastOrders/>}></Route>
>>>>>>> da8300067949a5e4a23d3231d6638977b2ab5fce
            </Routes>
      </BrowserRouter>
    </div>

    
  );
}

export default App;
