import React from 'react'
import Homepage from './Components/Homepage'
import { Route, Routes } from 'react-router-dom'
import Order from './Components/Order'
import Layout from './Layout'
import CartStore from './Components/CartStore'
import CheckOut from './Components/CheckOut'

function App() {

  return (
    <div className='w-full h-screen'>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/' element={<Layout />}>
          <Route path='/order' element={<Order />} />
          <Route path='/order/cart' element={<CartStore />} />
          <Route path='/checkout' element={<CheckOut />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App