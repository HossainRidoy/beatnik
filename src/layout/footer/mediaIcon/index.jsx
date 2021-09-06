import React from 'react'
import Twitter from "../../../assets/images/icon/twitter.svg"
import SocialIcon from "../../../api/socialIcon"
const MediaIcon = () => {
    return (
        <section className="bg-primary pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-7">
                        <p className="text-center text-lg-start text-white">
                            © 2021 All rights reserved by <strong>Beatnik Technology, </strong>
                            Member of <a className="text-white text-decoration-none" href="">
                                <strong>BASIS</strong>
                            </a> & <a className="text-white text-decoration-none" href="">
                                <strong>eCAB</strong>
                            </a>
                        </p>
                    </div>
                    <div className="col-12 col-lg-5 text-center text-lg-end mt-3 mt-lg-0">
                        {SocialIcon.map((icon, index) => (
                            <a key={index} href="" className="m-2">
                                <img style={{ width: "20px", filter: 'invert(1)' }} src={icon.socialIcon} alt="" />
                            </a>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default MediaIcon
