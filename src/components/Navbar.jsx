import { ShoppingCart, User } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setSearchTerm } from "../features/products/productSlice";

const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.product.searchTerm);

  // cart
  const cartItems = useSelector((state) => state.cart.items);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // user Toggle
  const handleUser = () => {
    setIsopen(!isOpen);
  };

  return (
    <header className="border-b border-gray-200">
      <div className="py-4 border-b border-gray-200 ">
        <ul className="container mx-auto flex flex-wrap items-center justify-between md:flex-row px-4 md:px-12 relative">
          <div className="flex text-sm lg:text-base gap-4 list-none">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">FAQs</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </div>

          <div
            className={`${
              isOpen
                ? "flex flex-col absolute right-0 md:right-0 top-12 z-10 bg-zinc-50 p-4 gap-4"
                : "hidden"
            }`}
          >
            <li>
              <Link to="/">Sign</Link>
            </li>
            <li>
              <Link to="/">My Account</Link>
            </li>
          </div>

          <User
            className="bg-gray-100 rounded-md p-2 text-black cursor-pointer w-8 h-8 "
            onClick={handleUser}
          />
        </ul>
      </div>

      <nav className="flex items-center justify-between container mx-auto md:py-6 py-8 px-2 ">
        <div className="flex items-center">
          <Link to="/" className=" py-2 px-4 rounded">
            {/* <p className="text-3xl font-semibold">e shope</p> */}
          </Link>
        </div>

         <Link to="/" className=" py-2 px-4 rounded">
            <p className="text-7xl my-10 font-medium text-center">eshop</p>
            {/* <p className="text-3xl font-semibold">e shope</p> */}
          </Link>

        <form className="w-1/2 sm:block hidden">
          <input
            type="text"
            placeholder="search product"
            className="bg-zinc-100 rounded-md text-sm focus:outline p-3 w-full"
            value={searchTerm}
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
          />
          
        </form>
        <div className="relative">
          <Link to={"/cart"}>
            <ShoppingCart
              className="cursor-pointer bg-gray-100 px-3 py-2 rounded-full w-10 h-10 mr-2"
            />
            {itemCount > 0 && (
              <span className="absolute -top-1 right-1 bg-blue-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
