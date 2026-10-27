import { useState } from 'react'
import { Link } from 'react-router-dom'
import { products, inr } from '../data'

export default function Checkout({ cart, dispatch }) {
  const [form, setForm] = useState({ name: '', phone: '', address: '', city: '', pin: '', pay: 'UPI' })
  const [order, setOrder] = useState(null)
  const [error, setError] = useState('')

  const lines = cart.map((i) => ({ ...i, p: products.find((p) => p.id === i.id) }))
  const subtotal = lines.reduce((s, l) => s + l.p.price * l.qty, 0)
  const shipping = subtotal === 0 || subtotal >= 499 ? 0 : 49
  const total = subtotal + shipping
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    if (!/^\d{10}$/.test(form.phone)) return setError('Enter a 10-digit phone number.')
    if (!/^\d{6}$/.test(form.pin)) return setError('Enter a 6-digit PIN code.')
    setError('')
    setOrder({ ref: 'SR-' + Math.floor(100000 + Math.random() * 900000), name: form.name, total })
    dispatch({ type: 'clear' })
  }

  if (order) {
    return (
      <div className="wrap done">
        <div className="tick">✓</div>
        <h1>Order placed, {order.name.split(' ')[0]}.</h1>
        <p className="muted">Your spices will be packed within 24 hours.</p>
        <div className="ref">{order.ref}</div>
        <p>Total paid: <strong>{inr(order.total)}</strong> ({form.pay})</p>
        <Link to="/" className="btn">Keep shopping</Link>
      </div>
    )
  }

  if (cart.length === 0) {
    return <div className="wrap"><h1>Checkout</h1><p className="muted">Your cart is empty. <Link to="/">Browse spices</Link></p></div>
  }

  return (
    <div className="wrap">
      <h1>Checkout</h1>
      <div className="checkout">
        <form onSubmit={submit} className="panel">
          <h2>Delivery details</h2>
          <label>Full name<input required value={form.name} onChange={set('name')} /></label>
          <div className="two">
            <label>Phone<input required value={form.phone} onChange={set('phone')} inputMode="numeric" /></label>
            <label>PIN code<input required value={form.pin} onChange={set('pin')} inputMode="numeric" /></label>
          </div>
          <label>Address<textarea required rows="2" value={form.address} onChange={set('address')} /></label>
          <div className="two">
            <label>City<input required value={form.city} onChange={set('city')} /></label>
            <label>Payment
              <select value={form.pay} onChange={set('pay')}>
                <option>UPI</option><option>Card</option><option>Cash on delivery</option>
              </select>
            </label>
          </div>
          {error && <p className="err" role="alert">{error}</p>}
          <button className="btn block">Place order · {inr(total)}</button>
        </form>
        <aside className="panel">
          <h2>Order summary</h2>
          {lines.map(({ p, qty }) => (
            <div className="row line" key={p.id}><span>{p.name} × {qty}</span><span>{inr(p.price * qty)}</span></div>
          ))}
          <div className="row line"><span>Shipping</span><span>{shipping ? inr(shipping) : 'Free'}</span></div>
          <div className="row total"><span>Total</span><strong>{inr(total)}</strong></div>
          <p className="muted">Free shipping on orders of ₹499 and above.</p>
        </aside>
      </div>
    </div>
  )
}
