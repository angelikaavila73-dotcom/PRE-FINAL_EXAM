import { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import { defaultProducts } from "./data/products";
import "./App.css";

function App() {
  const [products, setProducts] = useState(defaultProducts);

  const updateProduct = (id, changes) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, ...changes } : product
      )
    );
  };

  const addProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: Date.now(), inCart: false }]);
  };

  const handlers = {
    onAddToCart: (product) => {
      if (product.stock > 0) {
        updateProduct(product.id, {
          inCart: true,
          quantity: 1,
          stock: product.stock - 1,
        });
      }
    },
    onRemoveFromCart: (product) =>
      updateProduct(product.id, {
        inCart: false,
        quantity: 0,
        stock: product.stock + product.quantity,
      }),
    onIncrease: (product) => {
      if (product.stock > 0) {
        updateProduct(product.id, {
          quantity: product.quantity + 1,
          stock: product.stock - 1,
        });
      }
    },
    onDecrease: (product) => {
      if (product.quantity > 1) {
        updateProduct(product.id, {
          quantity: product.quantity - 1,
          stock: product.stock + 1,
        });
      }
    },
  };

  const cartCount = products.filter((product) => product.inCart).length;

  return (
    <div className="app">
      <nav className="navbar">
        <h2>EMU</h2>
        <div className="nav-links">
          <NavLink to="/">Products</NavLink>
          <NavLink to="/add">Add Product</NavLink>
          <NavLink to="/cart">Cart ({cartCount})</NavLink>
        </div>
      </nav>

      <main className="content">
        <Routes>
          <Route path="/" element={<Home products={products} {...handlers} />} />
          <Route path="/add" element={<AddProduct addProduct={addProduct} />} />
          <Route
            path="/product/:id"
            element={<ProductDetail products={products} {...handlers} />}
          />
          <Route
            path="/cart"
            element={<Cart products={products} {...handlers} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
