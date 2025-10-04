import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img from "../../public/lab1.jpg";
import img2 from "../../public/lab2.jpg";
import img3 from "../../public/lab3.jpg";
import img4 from "../../public/lab4.jpg";

const images = [
    img,
    img2,
    img3,
    img4,
];

const Gallery = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 640,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <section id="gallery" className="py-16 px-6 bg-white text-center">
            <h2 className="text-3xl font-bold text-teal-700 mb-8">Our Gallery</h2>
            <Slider {...settings}>
                {images.map((src, i) => (
                    <div key={i} className="px-2">
                        <img
                            src={src}
                            alt={`Lab ${i}`}
                            className="rounded-lg shadow-md w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default Gallery;
