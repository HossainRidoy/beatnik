import React from 'react'
import { Link } from 'react-router-dom'
import ServicesImg_1 from '../../../assets/images/services/1.png'
import ServicesImg_2 from '../../../assets/images/services/2.png'
import Services from '../../../api/servicesHome'
import Styel from "./service.module.scss"

const Service = () => {
    return (
        <section className='py-5'>
            <div className="container">
                <div className="mb-5 text-center">
                    <h2 className={`mb-1 ${Styel.h2}`}>SERVICES</h2>
                    <h3 className={Styel.h3}>Check Out Our Specialized Services</h3>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6 mb-4 mb-lg-0">
                        <div>
                            <img className="img-fluid" src={ServicesImg_1} alt="" />
                        </div>
                    </div>
                    {Services.map((item, index) => (
                        <div key={index} className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
                            <div className={`card border-0 ${Styel.card}`}>
                                <div className={`card-body ${Styel.cardBody}`}>
                                    <div className={`mb-3 ${Styel.imgage}`}>
                                        <img className="img-fluid" src={item.picture} alt="" />
                                    </div>
                                    <p className="font-size-18 mb-3">{item.title}</p>
                                    <p className="font-Montserrat font-size-14 mb-3">{item.descrivtion}</p>
                                    <Link to={item.url} className="d-block text-dark text-decoration-none font-Montserrat">
                                        {item.button}
                                        <span className={` ${Styel.arrowRight}`}>
                                            <img className="img-fluid" src={item.arrow} alt="" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="col-12 col-md-6 col-lg-6 mb-4 mb-lg-0">
                        <div>
                            <img className="img-fluid" src={ServicesImg_2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service
