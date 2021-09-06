import React, { useEffect } from 'react'
import TopAboutBanner from './topAboutBanner'
import WhyBeatnikTechnology from './why-Beatnik-Technology'
import ClientsWorkLogoSlide from "../../components/clientsWorkLogoSlide"
import TeamLead from './team-lead'
import Contact from '../../components/contact'

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <TopAboutBanner />
            <WhyBeatnikTechnology />
            <ClientsWorkLogoSlide title="Bangladesh" />
            <TeamLead />
            <Contact />

        </>
    )
}

export default About
