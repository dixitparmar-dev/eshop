import Footer from "../components/Footer";
import ProductGrid from "../components/ProductGrid";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "../features/products/productSlice";

const categories = [
  "All",
  "Graphic cards",
  "Laptop",
  "Monitors",
  "Power Supply",
];

const Home = () => {
  const dispatch = useDispatch();

  return (
    <div>
      {/* <div className="bg"></div> */}
      <div className="container mx-auto my-10 px-4">
        <div className="flex gap-2 overflow-auto scroll-smooth scroll-hide lg:px-20">
          {categories.map((item, i) => (
            <button
              key={i}
              className="bg-white border border-gray-300 lg:text-base text-xs py-2 px-4 rounded-md text-black hover:text-white hover:bg-zinc-400 cursor-pointer"
              onClick={() => dispatch(setSelectedCategory(item))}
            >
              {item}
            </button>
          ))}
        </div>

        <ProductGrid />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
