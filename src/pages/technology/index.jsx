import React, { useState, useEffect } from "react";
import StyleScss from "./technology.module.scss"
import technologyIcon from "../../api/technology";


const TechnologyButton = [
  {
    id: 1,
    name: "All",
  },
  {
    id: 2,
    name: "Applications",
  },
  {
    id: 3,
    name: "Mobile & Social",
  },
  {
    id: 5,
    name: "CMS",
  },
  {
    id: 6,
    name: "UI Solutions",
  },
  {
    id: 7,
    name: "Others",
  },
];

const Technology = () => {



  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  const [seleted, setseleted] = useState(0)

  const [mobileTab, setmobileTab] = useState(window.innerWidth)

  const [technologyItems, setTechnologyItems] = useState(technologyIcon)

  const buttonClick = (clickId, index) => {
    if (index === 0) {
      setTechnologyItems(technologyIcon)

    } else {
      let filterItem = technologyIcon.filter((item) => item.reletedIconId === index)
      setTechnologyItems(filterItem)

    }
    setseleted(index)

  }


  return (
    <section className={`overflow-hidden ${StyleScss.technology}`}>
      <div className="container">

        <h1 className={`text-center mb-4 ${StyleScss.h1}`}>Technology</h1>
        <div className="justify-content-lg-center d-lg-flex ">
          {TechnologyButton &&
            TechnologyButton.length > 0 &&
            TechnologyButton.map((button, index) => {
              return (
                <button
                  key={index}
                  className={`border py-2 px-2 m-1 font-size-24 font-Montserrat text-start bg-white rounded ${seleted === index && StyleScss.active}`}
                  onClick={() => { buttonClick(button.id, index) }}
                >
                  {button.name}
                </button>
              );
            })}
        </div>
        <div className={`row mt-2 ${mobileTab < 991 && 'overflow-hidden'}`}>
          {technologyItems &&
            technologyItems.length > 0 &&
            technologyItems.map((item, index) => {
              return (
                <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2 mt-4">
                  <div className={`rounded ${StyleScss.technologyCard}`}>
                    <div className="card-body text-center">
                      <img className={`img-fluid ${StyleScss.img}`} src={item.image} alt="" />
                      <p className={`font-size-16 font-Montserrat mt-2 ${StyleScss.title}`}>{item.name}</p>
                    </div>

                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Technology;
