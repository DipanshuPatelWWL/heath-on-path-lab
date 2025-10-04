import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
    return (
        <footer className="bg-teal-700 text-white py-10">
            <div className="max-w-6xl mx-auto px-6 text-center flex flex-col items-center gap-6">
                {/* Logo and Name */}
                <div className="flex flex-col items-center">
                    <img
                        src={logo}
                        alt="Health on Path Lab Logo"
                        className="w-14 h-14 mb-2"
                    />
                    <h2 className="text-2xl font-semibold tracking-wide">
                        Health on Path Lab
                    </h2>
                    <p className="text-teal-100 text-sm mt-1">
                        Your Trusted Partner in Health Diagnostics
                    </p>
                </div>

                {/* Footer Links (optional - can be removed if not needed) */}
                <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base mt-4">
                    <a
                        href="#home"
                        className="hover:text-teal-200 transition-colors duration-200"
                    >
                        Home
                    </a>
                    <a
                        href="#about"
                        className="hover:text-teal-200 transition-colors duration-200"
                    >
                        About
                    </a>
                    <a
                        href="#services"
                        className="hover:text-teal-200 transition-colors duration-200"
                    >
                        Services
                    </a>
                    <a
                        href="#contact"
                        className="hover:text-teal-200 transition-colors duration-200"
                    >
                        Contact
                    </a>
                </div>

                {/* Divider */}
                <div className="w-full border-t border-teal-500 my-4"></div>

                {/* Footer Bottom Text */}
                <div className="text-sm md:text-base text-center space-y-1">
                    <p>
                        © {new Date().getFullYear()}{" "}
                        <span className="font-medium">Health on Path Lab</span> | All Rights Reserved
                    </p>
                    <p className="text-teal-100">
                        Developed by{" "}
                        <span className="font-semibold text-white hover:underline cursor-pointer">
                            Dipanshu Patel
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
