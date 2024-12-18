import { Link } from "react-router";
import { TbBooks } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";


export default function Navbar() {
    const [isDropdownOpen, setIsDropdown] = useState(false);
    const currentUser = true
    return (
        <header className="max-w-screen-2xl mx-auto px-4 py-6">
            <nav className="flex justify-between items-center">
                {/* Left side */}
                <div className="flex items-center md:gap-8">
                    {/* Logo */}
                    <Link to="/" className="btn-primary">
                        <TbBooks className="size-12 text-primary" />
                    </Link>

                    {/* Search input */}
                    <div className="relative sm:w-72 w-40 space-x-2">
                        <FaSearch className="absolute inline-block left-3 inset-y-2" />
                        <input type="text" placeholder="Search books..." className="bg-[#EAEAEA] rounded-md py-1 w-full md:px-8 px-6 focus:outline-none" />
                    </div>
                </div>

                {/* Right side */}
                <div className="relative flex items-center md:space-x-3 space-x-2">
                    <FaUserCircle className="size-8" />
                    <button className="hidden sm:block btn-primary">
                        <FaRegHeart className="size-8" />
                    </button>

                    <Link to="/cart" className="bg-primary p-1 sm:px-6 py-2 flex items-center rounded-lg hover:bg-opacity-80 transition-all duration-200">
                        <AiOutlineShoppingCart className="size-8" />
                        <span className="text-sm font-semibold sm:ml-1">0</span>
                    </Link>
                </div>
            </nav>
        </header>
    )
}