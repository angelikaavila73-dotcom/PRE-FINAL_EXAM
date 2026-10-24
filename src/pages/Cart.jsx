import { Link } from "react-router-dom";
import ProductList from "../components/ProductList";

function Cart({ products, ...handlers }) {
  const cartItems = products.filter((product) => product.inCart);

  const cartTotal = cartItems.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <div>
          <p className="empty">Your cart is empty.</p>
          <Link to="/">Go to Products</Link>
        </div>
      ) : (
        <div>
          <ProductList products={cartItems} {...handlers} />
          <div className="total-box">Cart Total: ₱{cartTotal.toFixed(2)}</div>
        </div>
      )}
    </div>
  );
}

export default Cart;
