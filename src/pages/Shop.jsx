import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import Bowl from '../components/Bowl'
import { products, categories } from '../data'

export default function Shop({ dispatch }) {
  const [cat, setCat] = useState('All')
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState('default')

  let list = products.filter(
    (p) => (cat === 'All' || p.cat === cat) && p.name.toLowerCase().includes(query.toLowerCase())
  )
  if (sort === 'low') list = [...list].sort((a, b) => a.price - b.price)
  if (sort === 'high') list = [...list].sort((a, b) => b.price - a.price)

  return (
    <>
      <section className="hero">
        <div className="wrap hero-in">
          <div>
            <h1>Spices, straight from where they grow.</h1>
            <p>Whole and ground spices from twelve Indian growing regions, packed in small batches so they reach your kitchen fresh.</p>
            <a href="#shop" className="btn">Shop spices</a>
          </div>
          <div className="swatches" aria-hidden="true">
            {products.slice(0, 6).map((p) => (
              <Bowl key={p.id} color={p.color} size={110} />
            ))}
          </div>
        </div>
      </section>

      <section id="shop" className="wrap">
        <div className="toolbar">
          <div className="chips">
            {categories.map((c) => (
              <button key={c} className={'chip' + (c === cat ? ' on' : '')} onClick={() => setCat(c)}>{c}</button>
            ))}
          </div>
          <input type="search" placeholder="Search spices" value={query} onChange={(e) => setQuery(e.target.value)} />
          <select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort">
            <option value="default">Featured</option>
            <option value="low">Price: low to high</option>
            <option value="high">Price: high to low</option>
          </select>
        </div>
        {list.length === 0 && <p className="muted">No spices match your search. Try another name or category.</p>}
        <div className="grid">
          {list.map((p) => (
            <ProductCard key={p.id} product={p} onAdd={(id) => dispatch({ type: 'add', id })} />
          ))}
        </div>
      </section>
    </>
  )
}
