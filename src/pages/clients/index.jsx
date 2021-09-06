import React, { useEffect } from "react";
import ClientsLogo from "../../api/cliendtsLogo";
import StyleScss from './clients.module.scss'

const Clients = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <section className={StyleScss.clients}>
      <div className="container">
        <div className="text-center mb-4">
          <h1 className="mb-2">Clients</h1>
          <h3 className=""> Make the client the hero of your story.</h3>
        </div>
        <div className="row">
          {ClientsLogo.map((item, index) => (
            <div key={index} className={`col-6 col-md-3 col-lg-2 mt-4 ${StyleScss.cardList}`}>
              <div className={`card ${StyleScss.card}`}>
                <div className="p-2" >
                  <img className="img-fluid border" src={item.picture} alt="" />
                </div>
                <div className={`card-body ${StyleScss.cardBody}`}>
                  <p className="font-size-18 font-Montserrat"><span>Company Name :</span> <span>{item.brandTitle}</span></p>
                  <ol className="mt-2 ">
                    {item.webLink && item.webLink.length > 0 && item.webLink.map((item, index) => (
                      <li key={index} className='nav-item'>
                        <a className="text-dark text-decoration-none nav-link font-Montserrat" target="_blank" href={item.link}>{item.name}</a>
                      </li>
                    ))}

                  </ol>
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Clients;
