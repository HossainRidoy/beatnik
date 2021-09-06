import React from 'react'
import { Link } from 'react-router-dom'
import OurWorkSlide from '../../../components/ourWorkSlide'
import Style from "./ourWork.module.scss"


const OurWork = () => {
    return (
        <section className="py-5">
            <div className="container">
                <h2 className={`text-center mb-5 ${Style.h2}`}>Our Work</h2>
                <div className="row overflow-hidden">

                    {/* OUR WORK SLIDER START */}
                    <OurWorkSlide />

                    <div className="text-center mt-5 d-block">
                        <Link to="/portfolio" className="">
                            <button className="btn-ani-warning rounded-pill text-uppercase">See All Work</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurWork
