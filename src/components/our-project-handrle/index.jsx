import React from 'react'
import Style from './ourProjectHandrle.module.scss'
import Basis from "../../assets/images/home/basis.png"

const OurProjectHandrle = () => {
    return (
        <div className={`card my-3 my-lg-5 ${Style.artical}`}>

            <div className={`card-body text-center ${Style.articalBody}`}>
                <div className="bg-white px-4 d-inline-block">
                    <div className="d-flex justify-content-center align-items-center">
                        <span className="font-Montserrat"><strong>50+ </strong> Clients</span>
                        <span className="mx-2 fs-3">|</span>
                        <span className="font-Montserrat"><strong>100+ </strong> Projects</span>
                        <span className="mx-2 fs-3">|</span>
                        <span className="font-Montserrat"><strong>3+ </strong> Countries</span>
                    </div>
                </div>
          
            <div className=" mt-4 d-flex flex-wrap align-items-center justify-content-center">
                <p className="me-2 mb-2 mb-lg-0"><strong className="">We are a proud member of </strong></p>
                <div className="d-flex align-items-center fs-3 ">
                    <span style={{ width: "120px", display: "block" }} className=" overflow-hidden shadow border rounded-pill">
                        <img className="w-75" src={Basis} alt="" />
                    </span>
                    <span className="mx-2">&</span>
                    <span style={{ width: "120px", display: "block" }} className="overflow-hidden shadow border rounded-pill">
                        <img className="w-75" src={Basis} alt="" />
                    </span>
                </div>
            </div>
            </div>

        </div>
    )
}

export default OurProjectHandrle
