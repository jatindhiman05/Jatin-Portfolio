import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { BsPerson, BsCodeSlash } from 'react-icons/bs';
import { CgFileDocument } from 'react-icons/cg';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = ({ darkMode }) => {
    const [navbarBlur, setNavbarBlur] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const scrollHandler = () => {
            setNavbarBlur(window.scrollY >= 20);
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);

    const navLinks = [
        { name: 'Home', to: '/', icon: <AiOutlineHome className="text-lg" /> },
        { name: 'About', to: '/About', icon: <BsPerson className="text-lg" /> },
        { name: 'Projects', to: '/Project', icon: <BsCodeSlash className="text-lg" /> },
        { name: 'Resume', to: '/Resume', icon: <CgFileDocument className="text-lg" /> },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navbarBlur
            ? `backdrop-blur-md ${darkMode ? 'bg-gray-900/80 shadow-lg' : 'bg-white/80 shadow-sm'}`
            : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-6 py-3 flex justify-center items-center relative">
                {/* Nav Links */}
                <ul
                    className={`md:flex md:items-center md:gap-10 absolute md:static left-0 w-full md:w-auto justify-center transition-all duration-300 ease-in-out shadow-md md:shadow-none ${menuOpen
                        ? `top-16 opacity-100 ${darkMode ? 'bg-gray-800' : 'bg-white'}`
                        : 'top-[-490px] md:top-0 opacity-0 md:opacity-100'
                        }`}
                >
                    {navLinks.map((link) => (
                        <li
                            key={link.name}
                            className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-100'} last:border-b-0 md:border-b-0`}
                        >
                            <Link
                                to={link.to}
                                onClick={() => setMenuOpen(false)}
                                className={`flex items-center gap-2 px-8 py-4 md:py-3 font-medium transition-colors ${location.pathname === link.to
                                    ? darkMode ? 'text-blue-400' : 'text-blue-600'
                                    : darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
                                    }`}
                            >
                                <span className={darkMode ? 'text-blue-400' : 'text-blue-500'}>{link.icon}</span>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Hamburger Button */}
                <button
                    className="md:hidden absolute right-6 top-1/2 -translate-y-1/2 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? (
                        <FiX className={`w-6 h-6 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`} />
                    ) : (
                        <FiMenu className={`w-6 h-6 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`} />
                    )}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
