import React, { useState, useEffect } from 'react'
import ServicesItem from '../../api/servics'
import Style from './service.module.scss';
import OurWorkCategory from "../../api/ourWork"
import WorkCard from "../../components/cards/workCard"
import { Link } from 'react-router-dom';
import Contact from "../../components/contact"

const Services = (props) => {

    const [serviceItem, setServiceItem] = useState('')
    const [reletedWork, setReletedWork] = useState('')

    useEffect(() => {
        window.scrollTo(0, 0)

        getClikcId(parseInt(props.match.params.id))
    }, [props.match.params.id])

    const getClikcId = (clickId) => {
        let itemsfilter = ServicesItem.filter((item) => item.id === clickId)
        setServiceItem(itemsfilter[0])
        reletedItem(clickId)
    }

    const reletedItem = (clickIdCategory) => {
        let filterItem = OurWorkCategory.filter((item) => item.categoryId === clickIdCategory)
        setReletedWork(filterItem)
    }

    return (
        <section className={Style.services}>
            <div className="container">
                <div className={`row align-items-center justify-content-between ${Style.widthVh}`}>
                    <div className="col-12 col-md-6">
                        <h1 className={`mb-lg-4 ${Style.h1}`}>{serviceItem.title}</h1>
                        <p className="font-size-14 font-Montserrat">
                            {serviceItem.subTitle}
                        </p>
                    </div>
                    <div className="col-12 col-md-6">
                        <img className="img-fluid" src={serviceItem.picture} alt="" />
                    </div>
                </div>

                <div className="row">
                    {serviceItem.subCategory &&
                        serviceItem.subCategory.length > 0 &&
                        serviceItem.subCategory.map((item, index) => {
                            return (
                                <div key={index} className={`col-12 col-md-6 col-lg-4 pb-4 ${Style.card}`}>
                                    <div className={`card-body ${Style.cardBody}`}>
                                        <div className={` ${Style.cardImg}`}>
                                            <img className="img-fluid" src={item.picture} alt="" />
                                        </div>
                                        <div className="desc">
                                            <h3 className="font-size-24 text-center py-3">
                                                {item.title}
                                            </h3>
                                            <p className="font-size-14 font-Montserrat">
                                                {item.subTitle}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>

                {/* releted work */}
                <h2 className={`text-center my-5 ${Style.h2}`}>{serviceItem.title}</h2>
                <div className="row">
                    {reletedWork && reletedWork.length > 0 && reletedWork.map((item, index) => (
                        <div key={index} className='col-12 col-md-6 col-lg-4 mb-4 mb-lg-0'>
                            <WorkCard item={item} />
                        </div>
                    ))}
                </div>

                {/* See all button */}
                <div className="text-center my-5">
                    <Link to="/portfolio" className="d-inline-block"> <button className="btn-ani-warning">See All Work</button></Link>
                </div>
            </div>
             {/* Footer Contact */}
             <Contact />
        </section>
    )
}

export default Services
