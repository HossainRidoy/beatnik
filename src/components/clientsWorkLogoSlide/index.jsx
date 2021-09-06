import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CliendtsLogos from '../../api/cliendtsLogo'
import Style from "./clientsWorkLogoSlide.module.scss"

const ClientsWorkLogoSlide = (props) => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    vertical: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };
  return (
    <section className="bg-light py-5 my-5">
      <div className="container">
        <h2 className={`mb-5 ${Style.h2}`}>Clients We Work With {props.title}</h2>

          <Slider {...settings}>
            {CliendtsLogos.map((logo, index) => (
              <div key={index} className="">
                <img className=" w-100" src={logo.picture} alt="" />
              </div>
            ))}
          </Slider>

      </div>
    </section>
  )
}

export default ClientsWorkLogoSlide
