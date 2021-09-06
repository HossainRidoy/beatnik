import React from 'react'
import { Link } from 'react-router-dom'
import Picture from "../../../assets/images//home/1.png"
import StyleSass from "./topBanner.module.scss"
import OurProjectHandrle from "../../../components/our-project-handrle"

const TopBanner = () => {
    return (
        <section className={` py-5 ${StyleSass.TopBanner}`}>

            <div className="container">
                <div className={`row align-items-center justify-content-between ${StyleSass.widthVh}`}>
                    <div className="col-12 col-md-6 ">
                        <div className="">
                            <h1 className={`text-center text-lg-start  ${StyleSass.h1}`}>We Bring</h1>
                            <h1 className={`text-center text-lg-start text-info py-lg-3 ${StyleSass.h1}`}>IMPACTFUL</h1>
                            <h1 className={`text-center text-lg-start  ${StyleSass.h1}`}>Technology Solutions</h1>
                        </div>
                        {/* Our Project Handrle start*/}
                        <OurProjectHandrle />
                        {/* Our Project Handrle end*/}
                        <div className="text-center text-lg-start mt-5">
                            <Link to="/portfolio" className="d-inline-block"> <button className="btn-ani-primary me-4">Our Words</button></Link>
                            <Link to="/discussyourproject" className="d-inline-block"> <button className="btn-ani-warning">Contacts Us</button></Link>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="">
                            <img className="img-fluid" src={Picture} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default TopBanner
