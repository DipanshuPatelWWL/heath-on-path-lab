import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../assets/lab1.jpg";
import img2 from "../assets/lab2.jpg";
import img3 from "../assets/lab3.jpg";
import img4 from "../assets/lab4.jpg";

const images = [img1, img2, img3, img4];

const Gallery = () => {
    const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 640px)").matches);

    // Detect screen size changes
    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 640px)");
        const handleResize = (e) => setIsMobile(e.matches);

        mediaQuery.addEventListener("change", handleResize);
        return () => mediaQuery.removeEventListener("change", handleResize);
    }, []);

    // Slider settings based on screen size
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: isMobile ? 1 : 3, // 1 for mobile, 3 for desktop
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            {
                breakpoint: 1280, // Large desktop
                settings: { slidesToShow: 3, slidesToScroll: 1, arrows: true },
            },
            {
                breakpoint: 768, // Tablet
                settings: { slidesToShow: 2, slidesToScroll: 1, arrows: true },
            },
            {
                breakpoint: 640, // Mobile
                settings: { slidesToShow: 1, slidesToScroll: 1, arrows: false, dots: true },
            },
        ],
    };

    return (
        <section id="gallery" className="py-16 px-4 md:px-6 bg-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-8">
                Our Gallery
            </h2>
            <Slider {...settings}>
                {images.map((src, i) => (
                    <div key={i} className="px-3">
                        <div className="overflow-hidden rounded-xl shadow-md">
                            <img
                                src={src}
                                alt={`Lab ${i + 1}`}
                                className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default Gallery;