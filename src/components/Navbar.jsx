import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const navItems = [
        { name: "Home", to: "home" },
        { name: "About", to: "about" },
        { name: "Tests", to: "tests" },
        { name: "Equipments", to: "equipments" },
        { name: "Team", to: "team" },
        { name: "Gallery", to: "gallery" },
        { name: "Contact", to: "contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow z-50"
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
                {/* Logo + Title */}
                <div className="flex items-center gap-2">
                    <img src={logo} alt="Health on Path Lab Logo" className="w-10 h-10" />
                    <h1 className="text-xl md:text-2xl font-bold text-teal-700">
                        Health on Path Lab
                    </h1>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                to={item.to}
                                smooth={true}
                                offset={-80}
                                duration={600}
                                className="cursor-pointer hover:text-teal-600"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-teal-700 focus:outline-none"
                    onClick={() => setOpen(!open)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {open ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Dropdown */}
            {open && (
                <div className="md:hidden bg-white border-t shadow-lg">
                    <ul className="flex flex-col space-y-2 px-6 py-3 text-gray-700 font-medium">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    to={item.to}
                                    smooth={true}
                                    offset={-80}
                                    duration={600}
                                    onClick={() => setOpen(false)}
                                    className="block py-2 hover:text-teal-600"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </motion.nav>
    );
};

export default Navbar;
