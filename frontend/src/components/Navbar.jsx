import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-lg">
            <div className="container mx-auto px-5 py-3">
                <div className="flex justify-between items-center">
                    <Link to="/" className="text-xl font-bold text-gray-800">Mern Authentication</Link>
                    <button className="text-gray-500 focus:outline-none lg:hidden">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                            <path fillRule="evenodd" d="M4 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 5h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 5h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" clipRule="evenodd"></path>
                        </svg>
                    </button>
                    <div className="hidden lg:flex lg:items-center lg:w-auto">
                        <ul className="flex justify-end">
                            <li className="mx-2 my-2">
                                <Link to="/" className="text-gray-800 hover:text-blue-500">Home</Link>
                            </li>
                            <li className="mx-2 my-2">
                                <Link to="/login" className=" px-3 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300">Log In</Link>
                            </li>
                            <li className="mx-2 my-2">
                                <Link to="/signup" className="w-full px-2 py-2 border-2 border-blue-500 text-blue-500 rounded-lg hover:text-white hover:bg-blue-500 transition-colors duration-300">Sign Up</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
