import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import WorkItem from "../../api/ourWork"
import Style from "./ourWorkDetails.module.scss"
import technologyIcon_1 from "../../assets/images/technology/1.png"
import technologyIcon_2 from "../../assets/images/technology/2.png"
import technologyIcon_3 from "../../assets/images/technology/3.png"
import technologyIcon_4 from "../../assets/images/technology/4.png"
const OurWorkDetails = (props) => {

    const [singleItem, setSingleItem] = useState('')


    useEffect(() => {
        window.scrollTo(0,0)
        getItem(parseInt(props.match.params.id))
    }, [props.match.params.id])

    const getItem = (clickId) => {
        let filterItem = WorkItem.filter((item) => item.id === clickId)
        setSingleItem(filterItem[0])

    }



    return (
        <section style={{marginTop:"130px"}} className=''>
            <div className="container">
                <div className="my-4">
                    <Link className="text-dark me-2 d-block d-lg-inline font-Montserrat text-decoration-none" to="/">Home
                        <span className="ms-2">></span>
                    </Link>

                    <Link className="text-dark me-2 d-block d-lg-inline font-Montserrat text-decoration-none" to="/portfolio">Portfolio
                        <span className="ms-2">></span>
                    </Link>

                    <Link className="text-dark me-2 d-block d-lg-inline font-Montserrat text-decoration-none" to="">{singleItem.title}</Link>
                </div>

                <div className="text-center">
                    <img className="img-fluid" src={singleItem.picture} alt="" />
                </div>
                <div>
                    <h2 className={`mt-3 ${Style.h2}`}>{singleItem.title}</h2>
                    <p className="font-Montserrat mt-2">
                        <span className="me-3">Published: 30, April 2021</span>
                        <span className="me-1">@</span>
                        <span className="me-3">Views 1</span>
                    </p>
                </div>
                <div className="row my-4">
                    <div className="col-12 col-md-8">
                        <h3 className="my-2">Project summary</h3>
                        <p className="font-Montserrat">{singleItem.title} {singleItem.title}</p>
                    </div>
                    <div className="col-12 col-md-4">
                        <h3 className="my-2">Technology Stack</h3>
                        <div className='row border p-2'>
                            <div className="card col-4 col-md-6 p-3 d-flex align-items-center justify-content-center">
                                <span>
                                    <img className='img-fluid' src={technologyIcon_1} alt="" />
                                    <p className="text-center mt-2">figma</p>
                                </span>
                            </div>
                            <div className="card col-4 col-md-6 p-3 d-flex align-items-center justify-content-center">
                                <span>
                                    <img className='img-fluid' src={technologyIcon_2} alt="" />
                                    <p className="text-center mt-2">figma</p>
                                </span>
                            </div>
                            <div className="card col-4 col-md-6 p-3 d-flex align-items-center justify-content-center">
                                <span>
                                    <img className='img-fluid' src={technologyIcon_3} alt="" />
                                    <p className="text-center mt-2">figma</p>
                                </span>
                            </div>
                            <div className="card col-4 col-md-6 p-3 d-flex align-items-center justify-content-center">
                                <span>
                                    <img className='img-fluid' src={technologyIcon_4} alt="" />
                                    <p className="text-center mt-2">figma</p>
                                </span>
                            </div>


                        </div>
                    </div>
                    <div className="text-center mt-5"> 
                       <a href={singleItem.http} target="_blank" className="mx-2"><button className="btn-ani-warning">View Online</button></a>
                       <Link to="" className="mx-2"><button className="btn-ani-warning">Contact Us To Start Your Project</button></Link>
                    </div>
                </div>


            </div>

        </section>
    )
}

export default OurWorkDetails
