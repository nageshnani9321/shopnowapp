import React, { useState, useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { AuthContext } from "../../userContext/AuthContext";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = ({ numCartItems }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpenUser, setDropdownOpenUser] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const { isAuthenticated, setIsAuthenticated, username, user } =
        useContext(AuthContext);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const toggleDropdownUser = () => {
        setDropdownOpenUser(!dropdownOpenUser);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");

        setIsAuthenticated(false);

        navigate("/");
    };

    return (
        <nav className="bg-black text-white px-6 py-4 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">
                    <a href="/" className="hover:text-gray-400">
                        ShopNow
                    </a>
                </div>

                <div className="hidden md:flex space-x-6">
                    {isAuthenticated && (
                        <>
                            <a href="/" className="hover:text-gray-400">
                                Home
                            </a>
                            <a href="/about" className="hover:text-gray-400">
                                About
                            </a>
                        </>
                    )}

                    {isAuthenticated && (
                        <div className="relative">
                            <button
                                onClick={toggleDropdown}
                                className="flex items-center hover:text-gray-400"
                            >
                                <span>Products</span>
                                {dropdownOpen ? <MdArrowDropUp /> : <MdArrowDropDown />}
                            </button>
                            {dropdownOpen && (
                                <div className="absolute ml-1 mt-5 bg-black text-white py-2 px-4 shadow-lg rounded-md">
                                    <a
                                        href="/"
                                        className="block py-1 hover:bg-gray-700"
                                    >
                                        Electronics
                                    </a>
                                    <a
                                        href="/"
                                        className="block py-1 hover:bg-gray-700"
                                    >
                                        Clothes
                                    </a>
                                    {/* <a
                                        href="/products/category3"
                                        className="block py-1 hover:bg-gray-700"
                                    >
                                        Product3
                                    </a> */}
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Shopping Cart*/}
                <div className="flex items-center space-x-4">
                    {isAuthenticated && user ? (
                        <div className="relative">
                            <div className="flex items-center text-lg hover:text-gray-400">
                                <NavLink to="/profile">
                                    <span>Welcome {username}</span>
                                </NavLink>
                                <div onClick={toggleDropdownUser}>
                                    {dropdownOpenUser ? <MdArrowDropUp /> : <MdArrowDropDown />}
                                </div>
                            </div>
                            {dropdownOpenUser && (
                                <div className="absolute ml-20 mt-5 bg-black text-white py-2 px-4 shadow-lg rounded-md">
                                    <button
                                        onClick={handleLogout}
                                        className="block py-1 hover:bg-gray-700 w-full text-left"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="flex items-center space-x-2">
                            <NavLink to="/login" className="text-lg hover:text-gray-400">
                                Login
                            </NavLink>
                            <NavLink to="/signup" className="text-lg hover:text-gray-400">
                                Signup
                            </NavLink>
                        </div>
                    )}

                    {isAuthenticated && (
                        <div className="relative">
                            <a href="/cart" className="text-2xl relative">
                                <FaShoppingCart />
                                {numCartItems > 0 && (
                                    <span className="absolute top-[-2px] right-[-5px] bg-red-500 text-white text-xs rounded-full px-1 py-0.5 transform translate-x-1/2 translate-y-[-50%]">
                                        {numCartItems}
                                    </span>
                                )}
                            </a>
                        </div>
                    )}
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center space-x-2">
                    <button onClick={toggleMobileMenu} className="text-white">
                        <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {mobileMenuOpen && (
                <div className="md:hidden">
                    <div className="flex flex-col space-y-4 py-4">
                        {isAuthenticated && (
                            <>
                                <a href="/" className="text-white hover:text-gray-400">
                                    Home
                                </a>
                                <a href="/about" className="text-white hover:text-gray-400">
                                    About
                                </a>
                            </>
                        )}
                        
                        {isAuthenticated && (
                            <div className="relative">
                                <button
                                    onClick={toggleDropdown}
                                    className="text-white flex items-center space-x-2"
                                >
                                    <span>Products</span>
                                    <MdArrowDropDown />
                                </button>
                                {dropdownOpen && (
                                    <div className="absolute bg-black text-white py-2 px-4 shadow-lg rounded-md w-full">
                                        <a
                                            href="/"
                                            className="block py-1 hover:bg-gray-700"
                                        >
                                            Electronics
                                        </a>
                                        <a
                                            href="/"
                                            className="block py-1 hover:bg-gray-700"
                                        >
                                            Clothes
                                        </a>
                                        {/* <a
                                            href="/products/category3"
                                            className="block py-1 hover:bg-gray-700"
                                        >
                                            Category 3
                                        </a> */}
                                    </div>
                                )}
                            </div>
                        )}

                        
                        {!isAuthenticated && (
                            <div className="space-x-4">
                                <NavLink to="/login" className="text-white">
                                    Login
                                </NavLink>
                                <NavLink to="/signup" className="text-white">
                                    Sign up
                                </NavLink>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;












