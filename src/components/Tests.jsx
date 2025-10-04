import React from "react";

const tests = [
    { name: "CBC", price: 400 },
    { name: "LFT", price: 500 },
    { name: "KFT", price: 600 },
    { name: "LIPID Profile", price: 800 },
    { name: "RBS", price: 100 },
    { name: "Maleria", price: 500 },
    { name: "Typhoid", price: 500 },
    { name: "Thyroid Profile", price: 600 },
    { name: "Widal", price: 400 },
];

const Tests = () => {
    return (
        <section id="tests" className="py-16 px-6 bg-gray-50" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-center text-teal-700 mb-8">
                Our Tests & Prices
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {tests.map((test, i) => (
                    <div
                        key={i}
                        className="p-6 bg-white shadow-lg rounded-xl hover:scale-105 transition-transform"
                    >
                        <h3 className="text-xl font-semibold text-teal-600">{test.name}</h3>
                        <p className="text-gray-600 mt-2">₹{test.price}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Tests;
