import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
    return (
        <section
            id="contact"
            className="bg-teal-50 text-gray-800"
            data-aos="fade-up"
        >
            {/* Header (Full Width) */}
            <div className="bg-teal-700 text-white py-10 text-center shadow-md">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
                    Contact Us
                </h2>
                <p className="text-lg md:text-xl max-w-2xl mx-auto text-teal-100">
                    Reach out for inquiries, reports, or appointments. We're here to assist
                    you with all your health-related needs.
                </p>
            </div>

            {/* Content Section */}
            <div className="max-w-5xl mx-auto px-6 py-16">
                {/* Contact Info */}
                <div className="grid md:grid-cols-3 gap-10 mb-16 text-center">
                    <div className="flex flex-col items-center">
                        <MapPin className="w-10 h-10 text-teal-700 mb-3" />
                        <p>
                            Raitha Rd, near AMOLI LAWN, <br />
                            near HANUMAN MANDIR, BKT, Mubarakpur, <br />
                            Lucknow, Uttar Pradesh 226013
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Phone className="w-10 h-10 text-teal-700 mb-3" />
                        <p className="font-semibold text-lg">+91 6386510400</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Mail className="w-10 h-10 text-teal-700 mb-3" />
                        <p className="font-semibold text-lg">
                            healthonpathlab@gmail.com
                        </p>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
                    <form className="space-y-5">
                        <div className="grid md:grid-cols-2 gap-5">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-600"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-600"
                            />
                        </div>
                        <textarea
                            placeholder="Your Message"
                            rows="5"
                            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-600"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-teal-700 text-white font-semibold py-3 rounded-lg hover:bg-teal-800 transition-all"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
