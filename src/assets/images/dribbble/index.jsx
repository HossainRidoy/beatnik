import React from 'react'
import {dribbbleItem} from "../../api/dribbble"


const Dribbble = () => {



    return (
        <section className="py-5">
            <h1 className="text-center mb-5">We're on dribble</h1>
            <div className="container">
                <div className="row">
                    {dribbbleItem && dribbbleItem.length > 0 && dribbbleItem.map((item,index)=>{
                        return(
                            <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
                            <div style={{height:"540px"}} className="card">
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
                        )
                    })}
                   
                </div>
            </div>
        </section>
    )
}

export default Dribbble
