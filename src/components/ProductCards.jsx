import { Link } from "react-router-dom";

const ProductCards = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="border border-gray-300 rounded-lg cursor-pointer ">
        <img src={product.image} alt="" className="p-4"/>
        <div className="bg-gray-50 p-4">
          <h2 className="ltext-sm g:text-lg font-medium">
            {product.title.substring(0, 25) + "..."}
          </h2>
          <p className="text-[10px] lg:text-xs text-zinc-500 border-b-2 py-4 border-zinc-200">
            {product.description.substring(0, 70) + "..."}
          </p>

          <div className="flex items-center gap-4 justify-between mt-4 ">
            <p className="text-sm lg:text-xl font-semibold">₹{product.price}</p>
            <p className="text-[10px] lg:text-xs">View details</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCards;
