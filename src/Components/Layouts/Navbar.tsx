import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Search, Heart, ShoppingCart} from "lucide-react";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinkStyle = ({ isActive }: { isActive: boolean }) =>
  `transition-colors duration-200 ${
    isActive
      ? " md:border-b-1  "
      : "text-[#000000]"
  }`;

  return (
    <nav className="navbar">
      <div className="navbar_content">

        <NavLink to="/" className="text-2xl font-bold text-[#000000]">
          Exclusive
        </NavLink>

        <div className="hidden items-center gap-8 md:flex">
          <NavLink to="/" end className={navLinkStyle} >
            Home
          </NavLink>

          <NavLink to="/about" className={navLinkStyle}>
            About
          </NavLink>

          <NavLink to="/contact" className={navLinkStyle}>
            Contact
          </NavLink>

          <NavLink to="/signup" className={navLinkStyle}>
            Sign Up
          </NavLink>
        </div>

        <div className="hidden items-center gap-6 md:flex">

          <div className="flex items-center rounded-lg bg-gray-100 px-3 py-2">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full bg-transparent px-2 outline-none mr-3"
            />
            <Search size={20} className="text-[#000000]" />

          </div>

          <NavLink to="/wishlist">
            <button className="text-[#000000]">
              <Heart size={21} />
            </button>
          </NavLink>
          
          <NavLink to="/cart">
            <button className="text-[#000000]  ">
              <ShoppingCart size={21} />
            </button>
          </NavLink>

        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl md:hidden"
        >
          ☰
        </button>
      </div>
      {isOpen && (
        <div className="navbar_dropdown">
          <div className="flex flex-col gap-4">

            <NavLink to="/" className={navLinkStyle} >
              Home
            </NavLink>

            <NavLink to="/about" className={navLinkStyle}>
              About
            </NavLink>

            <NavLink to="/contact" className={navLinkStyle}>
              Contact
            </NavLink>

            <NavLink to="/signup" className={navLinkStyle}>
              Sign Up
            </NavLink>

            <div className="mt-4 flex gap-7.5 border-t border-gray-200 pt-4 justify-center  ">
              <button className="navbar_dropdown_icon">
                <Heart size={21} />
              </button>

              <button className="navbar_dropdown_icon">
                <ShoppingCart size={21} />
              </button>
            </div>

            <div className="mb-4 flex items-center rounded-lg bg-gray-100 px-3 py-2">
            
                <input
                type="text"
                placeholder="What are you looking for?"
                className="w-full bg-transparent px-2 outline-none"
                />
                <Search size={20} className="text-gray-500" />
            </div>
          

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;