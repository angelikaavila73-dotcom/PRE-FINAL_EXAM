function CartControls({ product, onAddToCart, onRemoveFromCart, onIncrease, onDecrease }) {
  if (!product.inCart) {
    return (
      <button
        className="btn btn-primary"
        onClick={() => onAddToCart(product)}
        disabled={product.stock === 0}
      >
        {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
      </button>
    );
  }

  return (
    <div className="cart-controls">
      <div className="qty-controls">
        <button
          className="btn"
          onClick={() => onDecrease(product)}
          disabled={product.quantity <= 1}
        >
          -
        </button>
        <span>{product.quantity}</span>
        <button
          className="btn"
          onClick={() => onIncrease(product)}
          disabled={product.stock === 0}
        >
          +
        </button>
      </div>
      <button className="btn btn-danger" onClick={() => onRemoveFromCart(product)}>
        Remove from Cart
      </button>
    </div>
  );
}

export default CartControls;
