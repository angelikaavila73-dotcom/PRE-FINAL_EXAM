import { useState } from "react";
import CategoryFilter from "../components/CategoryFilter";
import ProductList from "../components/ProductList";

function Home({ products, ...handlers }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const overallTotal = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  return (
    <div>
      <div className="toolbar">
        <CategoryFilter
          selected={selectedCategory}
          onChange={setSelectedCategory}
        />
        <div className="total-box">
          Overall Total: ₱{overallTotal.toFixed(2)}
        </div>
      </div>

      <ProductList products={filteredProducts} {...handlers} />
    </div>
  );
}

export default Home;
