import React from 'react'
import Style from "./topAboutBanner.module.scss";
import OurProjectHandrle from "../../../components/our-project-handrle"
import HomeBanner from "../../../assets/images/about/about.png"

const TopAboutBanner = () => {
    return (
        <section className={`${Style.topAboutBanner}`}>
            <div className="container">
                <div className={`row align-items-center justify-content-between ${Style.widthVh}`}>
                    <div className="col-12 col-md-6">
                        <div className="">
                            <h2 className={`mb-4 ${Style.h2}`}>YOUR DIGITAL ACCELERATION PARTNER</h2>

                            <p className="font-Montserrat mb-4 font-size-14">Beatnik Technology is a leading technology and website development company. We are a creative team of website developers, UI/UX designers, and digital marketers who push our boundaries with smart solutions.</p>

                            <p className="font-Montserrat mb-4 font-size-14">We are an 6 years of domain knowledge and expertise in IT consulting with offices in Dhaka, Bangladesh.</p>

                            <p className="font-Montserrat mb-4 font-size-14">We never stop until we give you what you desire!</p>
                            <OurProjectHandrle />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div>
                            <img className="img-fluid" src={HomeBanner} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TopAboutBanner
