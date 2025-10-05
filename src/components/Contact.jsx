import React, { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus("");

        try {
            const res = await fetch("https://heath-on-back.onrender.com/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (data.success) {
                setStatus("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setStatus(""), 3000);
            } else {
                setStatus("Failed to send message. Please try again.");
                setTimeout(() => setStatus(""), 3000);
            }
        } catch (error) {
            setStatus("Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="bg-teal-50 text-gray-800" data-aos="fade-up">
            {/* Header */}
            <div className="bg-teal-700 text-white py-10 text-center shadow-md">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-3">Contact Us</h2>
                <p className="text-lg md:text-xl max-w-2xl mx-auto text-teal-100">
                    Reach out for inquiries, reports, or appointments.
                </p>
            </div>

            {/* Contact Section */}
            <div className="max-w-5xl mx-auto px-6 py-16">
                {/* Info */}
                <div className="grid md:grid-cols-3 gap-10 mb-16 text-center">
                    <div className="flex flex-col items-center">
                        <MapPin className="w-10 h-10 text-teal-700 mb-3" />
                        <p>Raitha Rd, near AMOLI LAWN, BKT, Lucknow, UP 226013</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Phone className="w-10 h-10 text-teal-700 mb-3" />
                        <p className="font-semibold text-lg">+91 6386510400</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Mail className="w-10 h-10 text-teal-700 mb-3" />
                        <p className="font-semibold text-lg">healthonpathlab@gmail.com</p>
                    </div>
                </div>

                {/* Form */}
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid md:grid-cols-2 gap-5">
                            <input
                                name="name"
                                type="text"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-teal-600"
                            />
                            <input
                                name="email"
                                type="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-teal-600"
                            />
                        </div>

                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-teal-600"
                        ></textarea>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full flex items-center justify-center bg-teal-700 text-white font-semibold py-3 rounded-lg transition-all ${loading ? "opacity-80 cursor-not-allowed" : "hover:bg-teal-800"
                                }`}
                        >
                            {loading ? (
                                <>
                                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></span>
                                    Sending...
                                </>
                            ) : (
                                "Send Message"
                            )}
                        </button>

                        {status && (
                            <p className="text-center text-teal-700 font-medium mt-4">
                                {status}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
