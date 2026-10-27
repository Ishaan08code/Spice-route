import { Link } from 'react-router-dom'
import Bowl from './Bowl'
import { inr } from '../data'

export default function ProductCard({ product, onAdd }) {
  return (
    <article className="card">
      <Link to={`/product/${product.id}`} className="card-img" style={{ background: product.color + '26' }}>
        <Bowl color={product.color} />
      </Link>
      <div className="card-body">
        <span className="tag">{product.cat}</span>
        <h3>{product.name}</h3>
        <p className="muted">{product.origin}</p>
        <div className="row">
          <strong>{inr(product.price)} <small>/ 100 g</small></strong>
          <button className="btn small" onClick={() => onAdd(product.id)}>Add</button>
        </div>
      </div>
    </article>
  )
}
