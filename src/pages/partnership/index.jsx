import React, { useEffect } from 'react'
import StyleScss from "./partnership.module.scss"
import Article from "../partnership/article"
import ApplicationForm from './application-form'

const Partnership = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    return (
        <section className={StyleScss.partnership}>
            <div className="container">
                <div className="mb-5">
                    <h1 className={`text-center mb-2 ${StyleScss.h1}`}>Partner With Us</h1>
                    <h3 className={`text-center ${StyleScss.h2}`}>Enhance your Business by partnering with us</h3>
                </div>
            </div>
            <Article />
            <ApplicationForm />
        </section>
    )
}

export default Partnership
