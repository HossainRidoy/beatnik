import React,{useEffect} from 'react'
import TopBanner from "./topBanner"
import ClientsWorkLogoSlide from "../../components/clientsWorkLogoSlide"
import Service from './services'
import OurWork from './ourWork'
import Testimonials from "./testimonials"
import Contact from '../../components/contact'

const Home = () => {

    useEffect(()=>{
        window.scrollTo(0, 0)
            },[])

    return (
        <>
            <TopBanner />
            <ClientsWorkLogoSlide/>
            <Service/>
            <OurWork />
            <Testimonials />
            <Contact />
        </>
    )
}

export default Home
