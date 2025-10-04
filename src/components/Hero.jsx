import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section
            id="home"
            className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-100 to-teal-100 px-6"
        >
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-5xl md:text-6xl font-extrabold text-teal-700"
            >
                Health on Path Lab
            </motion.h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600">
                Trusted Diagnostic & Pathology Center
            </p>
            <a
                href="#tests"
                className="mt-6 px-8 py-3 bg-teal-600 text-white font-medium rounded-full hover:bg-teal-700 transition"
            >
                View Tests
            </a>
        </section>
    );
};

export default Hero;
