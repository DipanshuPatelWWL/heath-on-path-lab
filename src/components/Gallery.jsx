import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img from "../../public/lab1.jpg";
import img2 from "../../public/lab2.jpg";
import img3 from "../../public/lab3.jpg";
import img4 from "../../public/lab4.jpg";

const images = [img, img2, img3, img4];

const Gallery = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3, // Desktop default
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024, // Tablets
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
                    <div key={i} className="px-2">
                        <img
                            src={src}
                            alt={`Lab ${i + 1}`}
                            className="rounded-lg shadow-md w-full h-64 md:h-72 lg:h-80 object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default Gallery;
