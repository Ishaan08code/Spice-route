import { Link } from 'react-router-dom'
import { products, inr } from '../data'

export default function CartDrawer({ open, cart, dispatch, onClose }) {
  const lines = cart.map((i) => ({ ...i, p: products.find((p) => p.id === i.id) }))
  const subtotal = lines.reduce((s, l) => s + l.p.price * l.qty, 0)

  return (
    <>
      <div className={'overlay' + (open ? ' show' : '')} onClick={onClose} />
      <aside className={'drawer' + (open ? ' open' : '')} aria-hidden={!open}>
        <div className="drawer-head">
          <h2>Your cart</h2>
          <button className="x" onClick={onClose} aria-label="Close cart">×</button>
        </div>
        {lines.length === 0 && <p className="muted">Your cart is empty. Add a spice to get started.</p>}
        {lines.map(({ p, qty }) => (
          <div className="line" key={p.id}>
            <div>
              <strong>{p.name}</strong>
              <div className="muted">{inr(p.price)} × {qty}</div>
            </div>
            <div className="qty">
              <button onClick={() => dispatch({ type: 'dec', id: p.id })}>−</button>
              <span>{qty}</span>
              <button onClick={() => dispatch({ type: 'inc', id: p.id })}>+</button>
            </div>
          </div>
        ))}
        {lines.length > 0 && (
          <div className="drawer-foot">
            <div className="row"><span>Subtotal</span><strong>{inr(subtotal)}</strong></div>
            <Link to="/checkout" className="btn block" onClick={onClose}>Go to checkout</Link>
          </div>
        )}
      </aside>
    </>
  )
}
