import { Link } from "react-router-dom";
import CartControls from "./CartControls";
import { handleImageError } from "../utils/imageFallback";

function ProductCard({ product, ...handlers }) {
  const subtotal = product.price * product.quantity;
  const isLowStock = product.stock < 5;

  return (
    <div className={isLowStock ? "card low-stock" : "card"}>
      <img src={product.image} alt={product.name} onError={handleImageError} />
      <div className="card-body">
        <span className="category">{product.category}</span>
        <h3>{product.name}</h3>
        <p>Price: ₱{product.price.toFixed(2)}</p>
        {product.inCart && (
          <div>
            <p>Quantity: {product.quantity}</p>
            <p className="subtotal">Subtotal: ₱{subtotal.toFixed(2)}</p>
          </div>
        )}
        {isLowStock && <span className="badge">Low Stock</span>}
        <Link className="details-link" to={`/product/${product.id}`}>
          View Details
        </Link>
        <p className="stock">Stock: {product.stock}</p>
        <CartControls product={product} {...handlers} />
      </div>
    </div>
  );
}

export default ProductCard;
