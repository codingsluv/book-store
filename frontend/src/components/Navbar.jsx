import { Link } from "react-router";
import { TbBooks } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import avatarImg from "../assets/avatar.png"
import { useState } from "react";


const navigation = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "Dashboard",
        href: "/dashboard",
    },
    {
        name: "Orders",
        href: "/orders",
    },
    {
        name: "Cart Page",
        href: "/cart",
    },
    {
        name: "Check Out",
        href: "/checkout",
    }
]

export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    console.log(isDropdownOpen)
    const currentUser = true
    return (
        <header className="max-w-screen-2xl mx-auto px-4 py-6">
            <nav className="flex justify-between items-center">
                {/* Left side */}
                <div className="flex items-center md:gap-8">
                    {/* Logo */}
                    <Link to="/" className="btn-primary">
                        <TbBooks className="size-12" />
                    </Link>

                    {/* Search input */}
                    <div className="relative sm:w-72 w-40 space-x-2">
                        <FaSearch className="absolute inline-block left-3 inset-y-2" />
                        <input type="text" placeholder="Search books..." className="bg-[#EAEAEA] rounded-md py-1 w-full md:px-8 px-6 focus:outline-none" />
                    </div>
                </div>

                {/* Right side */}
                <div className="relative flex items-center md:space-x-3 space-x-2">
                    <div>
                        {
                            currentUser ? 
                                <>
                                    <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                                        <img src={avatarImg} alt="avatar" className={`w-10 h-10 rounded-full bg-slate-500 ${currentUser ? "ring-2 ring-purple-500" : ""}`} />
                                    </button>
                                    {/* show dropdown */}
                                    {
                                        isDropdownOpen && 
                                        <div className="absolute right-0 mt-2 w-48 bg-slate-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hover:transition-all hover:ease-in-out hover:bg-slate-300">
                                            <ul>
                                                <li className="py-2" onClick={() => setIsDropdownOpen(false)}>
                                                    {navigation.map(nav => (
                                                        <Link key={nav.name} to={nav.href} className="block px-4 py-2 text-sm hover:text-primary">{nav.name}</Link>
                                                    ))}
                                                </li>
                                            </ul>
                                        </div>
                                    }
                                </> : 
                                <Link to="/login" className="btn-primary">
                                    <FaUserCircle className="size-8" />
                                </Link>
                        }
                    </div>
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