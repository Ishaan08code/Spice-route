import { Link, NavLink } from 'react-router-dom'

export default function Navbar({ count, onCart }) {
  return (
    <header className="nav">
      <div className="wrap nav-in">
        <Link to="/" className="logo">Spice <span>Route</span></Link>
        <nav>
          <NavLink to="/" end>Shop</NavLink>
          <NavLink to="/checkout">Checkout</NavLink>
          <button className="cart-btn" onClick={onCart} aria-label="Open cart">
            Cart <b>{count}</b>
          </button>
        </nav>
      </div>
    </header>
  )
}
