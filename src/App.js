import Home from './Pages/Home';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import './App.css';
import CurrentOrder from './components/CurrentOrder';
import PastOrders from './components/PastOrders';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/OrderSummary' element={<CurrentOrder />}></Route>
            <Route exact path='/PastOrders' element={<PastOrders/>}></Route>
            </Routes>
      </BrowserRouter>
    </div>

    
  );
}

export default App;
