import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import StyleScss from "./header.module.scss"
import Logo from "../../assets/images/logo/logo.png"
import Menus from "../../api/headerMenu"
import Home from "../../assets/images/resposivIcon/home-solid.svg"
import Bars from "../../assets/images/resposivIcon/bars-solid.svg"



const Header = () => {


    const [fotterButton, setFotterButton] = useState(false)

    const clickButtonToggle = () => {
        setFotterButton(!fotterButton)
    }

    return (
        <section id='topNavbar' className={`bg-white shadow-sm py-3 py-lg-4 fixed-top  ${StyleScss.fixedTop}`}>
            <div className="container">
                <div className="d-lg-flex justify-content-between align-items-center">

                    <Link to="/" className="d-block text-center mb-3 mb-lg-0">
                        <img src={Logo} alt="" />
                    </Link>

                    {/* mobile device button */}
                    <div className={`bg-white d-lg-none fixed-bottom d-flex justify-content-between align-items-center ${StyleScss.fixedBottom}`}>
                        <Link to="/" className="p-3 bg-info"><img style={{ width: "20px" }} className="" src={Home} alt="" /></Link>
                        <span className="text-center font-size-11 mx-3">© 2021 All rights reserved by Beatnik Technology.
                            Member of BASIS, eCAB</span>
                        <span onClick={clickButtonToggle} style={{ cursor: "pointer" }} id="menuToggler" className="p-3">
                            <img style={{ width: "17px" }} className={StyleScss.menuToggler} src={Bars} alt="" />
                        </span>
                    </div>

                    <ul id="collapseMenu" className={`nav flex-column flex-lg-row ${StyleScss.collapseMenu} ${fotterButton && StyleScss.hoverDroupdown}`}>
                        {Menus.map((nav, index) => (
                            <li onClick={nav.subMenus ? () => { } : clickButtonToggle} className={`nav-item flex.cullm position-relative ${StyleScss.dropdown}`} key={index}>

                                <NavLink to={nav.url} activeClassName={ nav.url !== '#' && StyleScss.active} exact={true}  className={`nav-link text-dark ${StyleScss.navLink}`}>{nav.nav}
                                    {nav.arrow === null ? null : <img style={{ width: "15px" }} className="ms-2" src={nav.arrow} alt="" />}
                                </NavLink>
                                
                                <ul className={`nav flex-column position-absolute shadow bg-white ${StyleScss.dropdownMenu}`}>
                                    {nav.subMenus && nav.subMenus.length > 0 && nav.subMenus.map((subMenu, index) => (
                                        <li onClick={clickButtonToggle} key={index} className={`nav-item ${StyleScss.subMenuUnderline}`}>
                                            <NavLink  activeClassName={StyleScss.active} exact={true} to={subMenu.url} className="nav-link text-dark">{subMenu.nav}</NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>

                </div>
            </div>
        </section>
    )
}

export default Header
