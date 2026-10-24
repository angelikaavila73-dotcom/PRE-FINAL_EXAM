import { useNavigate } from "react-router-dom";
import AddProductForm from "../components/AddProductForm";

function AddProduct({ addProduct }) {
  const navigate = useNavigate();

  const handleAdd = (product) => {
    addProduct(product);
    navigate("/");
  };

  return <AddProductForm onSubmitProduct={handleAdd} />;
}

export default AddProduct;
