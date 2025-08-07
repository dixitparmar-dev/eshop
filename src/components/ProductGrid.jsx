import { useSelector } from "react-redux";
import ProductCards from "./ProductCards";

const ProductGrid = () => {
  const products = useSelector((state) => state.product.filteredItems);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 my-8 lg:px-20">
      {products.map((product, i) => (
        <ProductCards product={product} key={i} />
      ))}
    </div>
  );
};

export default ProductGrid;
