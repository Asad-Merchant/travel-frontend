import { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import {Routes, Route} from 'react-router-dom'
import OrderItem from './pages/OrderItem/OrderItem'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/ReactToastify.css'

function App() {

    const [listItem, setListItem] = useState(true)

  return (
    <>
        <Navbar listItem={listItem} />
        <ToastContainer />
        <Routes>
            <Route path='/' element={<Home setListItem={setListItem} />} />
            <Route path='/order' element={<OrderItem setListItem={setListItem} />} />
        </Routes>
        <Footer />
    </>
  )
}

export default App
