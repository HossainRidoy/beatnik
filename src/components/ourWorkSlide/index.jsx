import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import OurWorkItem from '../../api/ourWork'
import OurWorkCard from "../../components/cards/workCard"


const OurWorkSlide = () => {

  var settings = {
    dots: true,
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
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          dots: true

        }
      }
    ]
  };
  return (
    <Slider {...settings}>
      {OurWorkItem.map((item, index) => (
        <div key={index} className="">
          <OurWorkCard item={item} />
        </div>
      ))}
    </Slider>

  )
}

export default OurWorkSlide
