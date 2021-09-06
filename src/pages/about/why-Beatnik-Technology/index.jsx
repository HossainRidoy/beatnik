import React from 'react'
import Style from './whyBeatnikTechnology.module.scss'
import Image from "../../../assets/images/about/about_banner.png"
import Icon from "../../../assets/images/about/chsek.png"




function WhyBeatnikTechnology() {
    return (
        <section className="py-5">
            <div className="container">
                <h2 className={`text-center pb-5 ${Style.h2}`}>Why Beatnik Technology</h2>
                <div className="row align-items-center justify-content-between">
                    <div className="col-12 col-md-6">
                        <img className="img-fluid" src={Image} alt="" />
                    </div>
                    <div className="col-12 col-md-6 mt-4 mt-lg-0">
                        <div className="mb-3">
                            <div className="d-flex align-items-center mb-lg-2">
                                <img className={`img-fluid me-2 ${Style.icon}`} src={Icon} alt="" />
                                <h2 className={` ${Style.h2}`}>CREATIVITY</h2>
                            </div>
                            <p className={`font-size-20 ${Style.subTitle}`}>Find the best Creativity services you need to help you successfully meet your project planning goals.</p>
                        </div>
                        <div className="mb-3">
                            <div className="d-flex align-items-center mb-lg-2">
                                <img className={`img-fluid me-2 ${Style.icon}`} src={Icon} alt="" />
                                <h2 className={` ${Style.h2}`}>CREATIVITY</h2>
                            </div>
                            <p className={`font-size-20 ${Style.subTitle}`}>Find the best Creativity services you need to help you successfully meet your project planning goals.</p>
                        </div>
                        <div className="mb-3">
                            <div className="d-flex align-items-center mb-lg-2">
                                <img className={`img-fluid me-2 ${Style.icon}`} src={Icon} alt="" />
                                <h2 className={` ${Style.h2}`}>CREATIVITY</h2>
                            </div>
                            <p className={`font-size-20 ${Style.subTitle}`}>Find the best Creativity services you need to help you successfully meet your project planning goals.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default WhyBeatnikTechnology
