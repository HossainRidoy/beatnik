import React from 'react'
import Style from "./testimonials.module.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TestimonialsItems from "../../../api/testimonials"

function Testimonials() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className="py-5">
            <div className="container">
                <h2 className={`text-center mb-5 ${Style.h2}`}>Testimonials</h2>
                <div className="row overflow-hidden">
                    <Slider {...settings}>
                        {TestimonialsItems.map((item, index) => (
                            <div key={index}>
                                <div className={`card ${Style.card}`}>
                                    <div className="card-body">
                                        <p className={`font-Montserrat mb-3 font-size-14 ${Style.title}`}>{item.title}</p>
                                        <p className={`mb-1 ${item.color}`}>{item.name}</p>
                                        <p className={` ${item.color}`}>{item.descrivtion}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>

                </div>
            </div>
        </section>
    )
}

export default Testimonials
