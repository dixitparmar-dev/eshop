import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#fff] text-[#444]">
     

      <div className="bg-[#fff]  py-8 text-[#444]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 text-center">
            <div>
              <p className=" font-medium my-4">E-Shop</p>
              <p className="text-xs">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Architecto ipsum iure maiores velit qui optio quam cum
                perferendis magnam at.
              </p>
          
            </div>

            <div>
              <h2 className="text-2xl font-medium text-lg my-4">Pages</h2>
              <ul className="text-xs">
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
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-medium text-lg my-4">Category</h2>
              <ul className="text-xs">
                <li>
                  <Link to="/">Monitors</Link>
                </li>
                <li>
                  <Link to="/">GPUs</Link>
                </li>
                <li>
                  <Link to="/">Laptops</Link>
                </li>
                <li>
                  <Link to="/">Power Supply</Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-medium text-lg my-4">Category</h2>
              <p className="text-xs">
                70 Washington square South, New Your, Ny 10012, United States{" "}
              </p>
              <p className="text-xs mt-6">+12345 678 910</p>
              <p className="text-xs">+12345 678 109</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto text-center py-4 text-white">
        <p>copyright &copy; 2025 dixit parmar</p>
      </div>
    </footer>
  );
};

export default Footer;
