import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import FooterMenus from '../../../api/footerMenu'
import Logo from "../../../assets/images/logo/logo_fotter.png"
import style from "./menu.module.scss"


const Menu = () => {
    return (
        <section className="bg-primary py-5">
            <div className="container">
                <div className="d-lg-flex justify-content-between">
                    <Link to="" className="d-block text-center mb-3 mb-lg-0">
                        <img src={Logo} alt="" />
                    </Link>
                    <ul className="nav flex-column flex-lg-row">
                        {FooterMenus.map((nav, index) => (
                            <li className="nav-item flex.cullm fle mx-3" key={index}>
                                <NavLink activeClassName={style.active} exact={true} to={nav.url} className={`nav-link text-white font-size-20 text-center ${style.listAmimation}`}>{nav.nav}
                                </NavLink>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Menu
