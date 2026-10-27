import { useReducer, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import CartDrawer from './components/CartDrawer'
import Shop from './pages/Shop'
import Product from './pages/Product'
import Checkout from './pages/Checkout'
import './App.css'

// Cart state is managed with useReducer
function cartReducer(state, action) {
  switch (action.type) {
    case 'add': {
      const found = state.find((i) => i.id === action.id)
      return found
        ? state.map((i) => (i.id === action.id ? { ...i, qty: i.qty + 1 } : i))
        : [...state, { id: action.id, qty: 1 }]
    }
    case 'inc':
      return state.map((i) => (i.id === action.id ? { ...i, qty: i.qty + 1 } : i))
    case 'dec':
      return state.flatMap((i) =>
        i.id !== action.id ? [i] : i.qty > 1 ? [{ ...i, qty: i.qty - 1 }] : []
      )
    case 'clear':
      return []
    default:
      return state
  }
}

export default function App() {
  const [cart, dispatch] = useReducer(cartReducer, [])
  const [open, setOpen] = useState(false)
  const count = cart.reduce((n, i) => n + i.qty, 0)

  return (
    <>
      <Navbar count={count} onCart={() => setOpen(true)} />
      <main>
        <Routes>
          <Route path="/" element={<Shop dispatch={dispatch} />} />
          <Route path="/product/:id" element={<Product dispatch={dispatch} />} />
          <Route path="/checkout" element={<Checkout cart={cart} dispatch={dispatch} />} />
        </Routes>
      </main>
      <CartDrawer open={open} cart={cart} dispatch={dispatch} onClose={() => setOpen(false)} />
      <footer className="foot">
        <div className="wrap">© 2026 Spice Route. A student project, not a real store.</div>
      </footer>
    </>
  )
}
