import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Bowl from '../components/Bowl'
import ProductCard from '../components/ProductCard'
import { products, inr } from '../data'

export default function Product({ dispatch }) {
  const { id } = useParams()
  const p = products.find((x) => x.id === Number(id))
  const [grams, setGrams] = useState(100)
  if (!p) return <div className="wrap"><p>Spice not found. <Link to="/">Back to shop</Link></p></div>

  const packs = grams / 100
  const add = () => { for (let i = 0; i < packs; i++) dispatch({ type: 'add', id: p.id }) }
  const related = products.filter((x) => x.cat === p.cat && x.id !== p.id).slice(0, 3)

  return (
    <div className="wrap">
      <p className="crumb"><Link to="/">Shop</Link> / {p.cat} / {p.name}</p>
      <div className="detail">
        <div className="detail-img" style={{ background: p.color + '26' }}><Bowl color={p.color} size={320} /></div>
        <div>
          <h1>{p.name}</h1>
          <p className="muted">Grown in {p.origin}</p>
          <p className="lead">{p.note}</p>
          <p className="price">{inr(p.price * packs)} <small>for {grams} g</small></p>
          <label>Pack size
            <select value={grams} onChange={(e) => setGrams(Number(e.target.value))}>
              <option value={100}>100 g</option>
              <option value={200}>200 g</option>
              <option value={500}>500 g</option>
            </select>
          </label>
          <button className="btn" onClick={add}>Add to cart</button>
        </div>
      </div>
      <h2>More {p.cat.toLowerCase()} spices</h2>
      <div className="grid">
        {related.map((r) => <ProductCard key={r.id} product={r} onAdd={(i) => dispatch({ type: 'add', id: i })} />)}
      </div>
    </div>
  )
}
