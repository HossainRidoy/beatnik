import React, { useState } from 'react'
import teamLead from '../../../api/teamLead'
import More_less from '../../../components/more-less'
import Style from "./teamLead.module.scss"




const TeamLead = () => {



    return (
        <section className='py-5'>
            <div className="container">
                <h2 className={`font-size-36 text-center mb-5 ${Style.h2}`}>Team Lead</h2>

                <div className="row">

                    {teamLead.map((item, index) => (
                        <div key={index} className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
                            <div className={`shadow ${Style.card}`}>
                                <div className="card-body">
                                    <div className="">
                                        <img className="img-fluid" src={item.picture} alt="" />
                                    </div>
                                    <p className={`mt-1 ${item.color}`}>
                                        {item.name}
                                    </p>
                                    <p className=" ">{item.title}</p>

                                        <div>
                                            <More_less descrip={item.descrivtion} facebook={item.facebook} twitter={item.twitter}  />
                                        </div>
                                </div>
                            </div>
                        </div>
                    )
                    )}
                </div>
            </div>
        </section>
    )
}

export default TeamLead
