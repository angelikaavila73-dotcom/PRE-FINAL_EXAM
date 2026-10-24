import ProductCard from "./ProductCard";

function ProductList({ products, ...handlers }) {
  if (products.length === 0) {
    return <p className="empty">No products found.</p>;
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} {...handlers} />
      ))}
    </div>
  );
}

export default ProductList;
