import React from 'react'
import Style from './clientsWeWork.module.scss'
import ClientsLogoSlide from "../../../components/clientsWorkLogoSlide"
const ClientsWeWork = () => {
    return (
        <section className="bg-light py-5">
            <div className="container">
                <h2 className={`mb-4 ${Style.h2}`}>Clients We Work With</h2>
                <div className="row overflow-hidden">
                    <ClientsLogoSlide />
                </div>
            </div>
        </section>
    )
}

export default ClientsWeWork
