import React from "react";

const team = [
    { name: "Abhishek Yadav", role: "Owner", img: "../../public/abhi.jpg" },
    { name: "Amar Pal", role: "Lab Staff", img: "../../public/amar.jpg" },
    { name: "Amit", role: "Lab Staff", img: "../../public/Tamit.jpg" },
    { name: "Aman", role: "Lab Staff", img: "../../public/Taman.jpg" },
    { name: "Chotu", role: "Lab Staff", img: "../../public/chotu.jpg" },
    { name: "Dr. A.V. Kumar", role: "Certified Doctor", img: "../../public/doct.jpg" },
];

const Team = () => {
    return (
        <section id="team" className="py-16 px-6 bg-gray-50" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-center text-teal-700 mb-8">
                Our Team
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {team.map((member, i) => (
                    <div
                        key={i}
                        className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition"
                    >
                        <img
                            src={member.img}
                            alt={member.name}
                            className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-4 object-contain bg-gray-100"
                        />


                        <h3 className="text-lg text-center font-semibold text-teal-600">
                            {member.name}
                        </h3>
                        <p className="text-gray-500 text-center mt-2">{member.role}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Team;
