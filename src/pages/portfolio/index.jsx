import React, { useState,useEffect } from 'react'

import OurWork from '../../api/ourWork';
import WorkCard from '../../components/cards/workCard';
import Style from "./portfolio.module.scss"


const ButtonItems = [
    {
        id: 1,
        name: "ALL",
    },
    {
        id: 2,
        name: "SOFTWARE",
    },
    {
        id: 3,
        name: "MOBILE APP",
    },
    {
        id: 4,
        name: "UI / UX",
    },
    {
        id: 5,
        name: "WEBSITE",
    },
    {
        id: 6,
        name: "ECOMMERCE",
    },
    {
        id: 7,
        name: "SEO",
    },
    {
        id: 8,
        name: "HOSTING",
    },
];

const Portfolio = () => {

   
    const [seleted, setSeleted] = useState(0)
   

    const [allWorkItem, setAllWorkItem] = useState(OurWork)

    const clickHandelar = (clickId,index) => {
        if(index === 0 ){
            setAllWorkItem(OurWork)
        }else{
            let filterItem = OurWork.filter((item) => item.categoryId === index)
            setAllWorkItem(filterItem)
        }
        setSeleted(index)
    }

useEffect(()=>{
    window.scrollTo(0,0)
})

    return (
        <section className={`${Style.portfolio}`}>
            <div className="container">
                <h1 className={`text-center mb-5 ${Style.h1}`}>Portfolio</h1>
                <div className="d-flex justify-content-center flex-wrap pb-5">
                    {ButtonItems.map((item, index) => (
                        <span
                            key={index}
                            onClick={() => clickHandelar(item.id,index)}
                            className={`btn border px-3 pb-2 font-Montserrat mx-1 mb-2 mb-lg-0 ${seleted === index && Style.active}`}>
                            {item.name}
                        </span>
                    ))}
                </div>
                <div className="row">
                    {allWorkItem && allWorkItem.length > 0 && allWorkItem.map((item, index) => (
                        <div key={index} className='col-12 col-md-6 col-lg-4 mb-4'>
                            <WorkCard item={item} />
                        </div>
                    ))}
                </div>
                {/* <div className="text-center my-5">
                    <button className="btn-ani-warning rounded-pill">Load More</button>
                </div> */}
            </div>
        </section>
    )
}

export default Portfolio