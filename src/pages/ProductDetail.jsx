import { Link, useParams } from "react-router-dom";
import CartControls from "../components/CartControls";
import { handleImageError } from "../utils/imageFallback";

function ProductDetail({ products, ...handlers }) {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div>
        <p className="empty">Product not found.</p>
        <Link to="/">Back to Products</Link>
      </div>
    );
  }

  const subtotal = product.price * product.quantity;
  const isLowStock = product.stock < 5;

  return (
    <div className="detail">
      <Link to="/">← Back to Products</Link>
      <div className="detail-content">
        <img src={product.image} alt={product.name} onError={handleImageError} />
        <div className="detail-info">
          <span className="category">{product.category}</span>
          <h2>{product.name}</h2>
          <p>Rating: {product.rating} / 5</p>
          <h4>Description</h4>
          <p>{product.description}</p>
          <h4>Specification</h4>
          <p>{product.specification}</p>
          <p>Price: ₱{product.price.toFixed(2)}</p>
          {product.inCart && (
            <div>
              <p>Quantity: {product.quantity}</p>
              <p className="subtotal">Subtotal: ₱{subtotal.toFixed(2)}</p>
            </div>
          )}
          <p className="stock">Stock: {product.stock}</p>
          {isLowStock && <span className="badge">Low Stock</span>}
          <CartControls product={product} {...handlers} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
