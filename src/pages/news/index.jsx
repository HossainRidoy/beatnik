import React, { useEffect } from 'react'
import Card from "../../components/cards/otherCard"
import newsBasisItem from "../../api/newsBasis"
import { Link } from 'react-router-dom'
import StyleScss from "./news.module.scss"



const News = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <section className={` ${StyleScss.news}`}>

            <div className="container">
                <div className="mb-4">
                    <h1 className={`mb-2 text-center ${StyleScss.h1}`}>News & Media</h1>
                    <h3 className={`text-center ${StyleScss.h3}`}>Get Insights and Updates on Our Products and Tech Industry News.</h3>
                </div>
                <div className="row mt-5">
                    {newsBasisItem.map((item, index) => (
                        <Link to="" key={index} className={`mb-4 text-dark text-decoration-none ${index < 2 ? "col-12 col-md-6" : "col-12 col-md-6 col-lg-4"}`}>
                            <Card item={item} />
                        </Link>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default News
