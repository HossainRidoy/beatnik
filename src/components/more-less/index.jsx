import React, { useState } from 'react'
import facebook from "../../assets/images/about/facebook.png";
import linkedin from "../../assets/images/about/linkedin.png";
const More_less = (props) => {

    const [moreLess, setmoreLess] = useState(true)

    let limit_word = props.descrip.split("").slice(0, 100).join("")

    const lessMore = () => {
        setmoreLess(!moreLess)

    }

    return (

        <>
            {moreLess ? <> <p className="font-Montserrat font-size-14 my-3">{limit_word}...</p>
                <div className="d-flex align-items-center justify-content-between">
                    <button className="font-Montserrat border-0 bg-transparent" onClick={lessMore}>Read more</button>
                    <div>
                        <a href={props.facebook} target="_blank"><img className="img-fluid ms-3" src={facebook} alt="" /></a>
                        <a href={props.twitter} target="_blank"><img className="img-fluid ms-3" src={linkedin} alt="" /></a>

                    </div>
                </div>
            </> :
                <> <p className="font-Montserrat font-size-14 my-3">{props.descrip}</p>
                    <div className="d-flex align-items-center justify-content-between">
                        <button className="font-Montserrat border-0 bg-transparent" onClick={lessMore}>Read less</button>
                        <div>
                            <a href={props.facebook} target="_blank"><img className="img-fluid ms-3" src={facebook} alt="" /></a>
                            <a href={props.twitter} target="_blank"><img className="img-fluid ms-3" src={linkedin} alt="" /></a>

                        </div>
                    </div></>}

        </>

    )
}

export default More_less
