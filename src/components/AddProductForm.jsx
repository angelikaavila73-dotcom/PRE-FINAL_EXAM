import { useState } from "react";
import { categories } from "../data/products";

const emptyForm = {
  image: "",
  name: "",
  category: "",
  description: "",
  specification: "",
  rating: "",
  price: "",
  stock: "",
};

function AddProductForm({ onSubmitProduct }) {
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) {
      setForm((prev) => ({ ...prev, image: "" }));
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setForm((prev) => ({ ...prev, image: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const hasEmptyField = Object.values(form).some(
      (value) => value.trim() === ""
    );

    if (hasEmptyField) {
      setError("Please fill in all fields.");
      return;
    }

    if (Number(form.price) <= 0 || Number(form.stock) <= 0) {
      setError("Price and stock must be greater than 0.");
      return;
    }

    if (Number(form.rating) < 1 || Number(form.rating) > 5) {
      setError("Rating must be between 1 and 5.");
      return;
    }

    onSubmitProduct({
      ...form,
      rating: Number(form.rating),
      price: Number(form.price),
      stock: Number(form.stock),
      quantity: 0,
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add New Product</h2>
      {error && <p className="error">{error}</p>}

      <div className="form-grid">
        <div className="full-width">
          <label htmlFor="image">Feature Image</label>
          <input
            id="image"
            type="file"
            accept="image/*"
            onChange={handleImage}
          />
          {form.image && (
            <img className="preview" src={form.image} alt="Preview" />
          )}
        </div>
        <input
          name="name"
          placeholder="Product name"
          value={form.name}
          onChange={handleChange}
        />
        <select name="category" value={form.category} onChange={handleChange}>
          <option value="">Select category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <input
          name="rating"
          type="number"
          step="0.1"
          placeholder="Rating (1 to 5)"
          value={form.rating}
          onChange={handleChange}
        />
        <input
          name="price"
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
        />
        <input
          name="stock"
          type="number"
          placeholder="Quantity (stock available)"
          value={form.stock}
          onChange={handleChange}
        />
        <div></div>
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        />
        <textarea
          name="specification"
          placeholder="Specification"
          value={form.specification}
          onChange={handleChange}
        />
      </div>

      <button className="btn btn-primary" type="submit">
        Add Product
      </button>
    </form>
  );
}

export default AddProductForm;
