import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import { CartProvider } from './context/CartContext'
import About from './pages/About'
import Home from './pages/Home'
import Shop from './pages/Shop'

function App() {


  return (
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </CartProvider>


  )
}

export default App
