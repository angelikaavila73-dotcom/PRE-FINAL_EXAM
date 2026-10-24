import { categories } from "../data/products";

function CategoryFilter({ selected, onChange }) {
  return (
    <div className="filter">
      <label htmlFor="category-filter">Filter by category:</label>
      <select
        id="category-filter"
        value={selected}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="All">All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;
