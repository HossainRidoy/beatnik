import React, { useEffect } from 'react'
import dribbbleItem from "../../api/dribbble"
import StyelScss from "./dribbble.module.scss"
import FooterContact from "../../components/contact"
const Dribbble = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <section className={StyelScss.dribbble}>
            <h1 className={`text-center mb-5 ${StyelScss.h1}`}>We're on dribble</h1>
            <div className="container">
                <div className="row">
                    {dribbbleItem.map((item, index) =>(
                        <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
                            <div className={`card ${StyelScss.card}`}>
                                <img src={item.picture} alt="" />
                                <div className="card-body d-flex flex-column justify-content-between">
                                    <h5 className="card-title font-size-24 ">{item.title}</h5>
                                    <p className="card-text font-size-14 font-family-montserrat ">{item.subTitle}</p>
                                    <div className="text-end">
                                        <a href={item.pageLink} target='_blank' className="btn warning-btn font-size-16 rounded-pill text-uppercase mt-3">{item.button}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Footer Contacts start */}
            <FooterContact/>
            {/* Footer Contacts start */}

        </section>
    )
}

export default Dribbble
