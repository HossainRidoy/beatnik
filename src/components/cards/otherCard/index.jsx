import React from 'react'
import { Link } from 'react-router-dom'
import Style from "./otherCard.module.scss"

const WorkCard =({item})=> {
    return (
        <div className={` ${Style.card}`}>
        <div className={`text-center shadow-lg mb-2 ${Style.rouded30}`}>
            <img className={`img-fluid ${Style.imgZoom}`} src={item.picture} alt="" />
        </div>
        <div className="card-body">
            <div>
                <h3 className={`mb-4 ${Style.borderAnimate}`}>{item.title}</h3>
                <p className="font-size-14 font-Montserrat">{item.subTitle}</p>
            </div>
        </div>
    </div>
    )
}

export default WorkCard
