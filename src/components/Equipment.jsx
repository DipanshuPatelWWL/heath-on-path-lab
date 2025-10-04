import React from "react";

const equipments = [
    "Cell Counter",
    "Biochemistry Analyzer",
    "Microscope",
    "Blood Roller",
    "Centrifuge",
];

const Equipments = () => {
    return (
        <section id="equipments" className="py-16 px-6 bg-white text-center" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-teal-700 mb-6">
                Our Lab Equipments
            </h2>
            <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {equipments.map((eq, i) => (
                    <li
                        key={i}
                        className="p-4 bg-gray-100 rounded-lg shadow hover:bg-teal-50 transition"
                    >
                        {eq}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Equipments;
