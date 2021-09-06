import React,{useEffect} from 'react'
import Card from "../../components/cards/otherCard"
import  blogItem  from "../../api/blogs"
import { Link } from 'react-router-dom'
import StyleScss from "./blog.module.scss"



const Blog = () => {
useEffect(()=>{
window.scrollTo(0,0)
},[])

    return (
        <section className={`${StyleScss.Blog}`}>
            <h1 className={`text-center mb-5 ${StyleScss.h1}`}>Blog</h1>
           
            <div className="container">
                <div className="row">
                    {blogItem.map((item, index) =>(
                        <Link to={item.url} key={index} className={`mb-4 text-dark text-decoration-none ${index < 2 ? "col-12 col-md-6" : "col-12 col-md-6 col-lg-4"}`}>
                            <Card item={item} />
                        </Link>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default Blog
