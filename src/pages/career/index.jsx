import React, { useState } from "react";
import StylesScss from "./career.module.scss";
import CircularItems from "../../api/jobCircular"


const Career = () => {

  const [modalItem, setModalItem] = useState(null);

  const modalHandel = (item) => {
    setModalItem(item)
  }

  const closeModal = () => {
    setModalItem(null)
  }

  return (
    <section className={`${StylesScss.career}`}>
      <div className="container">
        <h1 className={`text-center mb-4 ${StylesScss.title}`}>Career</h1>

        <h3 className={`text-center mb-5 ${StylesScss.subTitle}`}>
          We are always open for the crazy ones, the ones who can think
          different and challenge the norm. Join us and be a part of a one big
          (crazy) family.
        </h3>

        <div className="row">

          {CircularItems.map((item, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 pt-4">
              <div className="card" >
                <img src={item.picture} className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk.</p>
                  <button  type="button" className="btn btn-primary mt-2" onClick={() => modalHandel(item)}>
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}

          {modalItem && (
            <div className={`modal fade ${modalItem ? 'show d-block' : ''} ${StylesScss.modal}`} id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className={`modal-dialog ${StylesScss.dialog}`}>
                <div className="modal-content">
                  <div className="modal-header d-flex justify-content-between bg-info align-items-stretch">
                    <div className="">
                        <h1 className={`modal-title mb-3 ${StylesScss.h1}`} id="exampleModalLabel">{modalItem.title}</h1>
                        <div className={`mb-3 d-flex flex-wrap font-size-20 ${StylesScss.sallay}`}>
                          <span className='bg-white px-4 py-2  rounded-pill me-4 mb-2 mb-lg-0'>Sallay: {modalItem.Salary}</span>
                          <span className='bg-white px-4 py-2  rounded-pill'>ApplicationDeadline: {modalItem.ApplicationDeadline}</span>
                        </div>
                    </div>
                    <button type="button" className="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
                  </div>
                  <div className="modal-body">
                    <p className="mb-3">{modalItem.subTitle1}</p>
                    <p className="mb-3">{modalItem.subTitle2}</p>
 
                    
                  </div>
                  <div className="modal-footer text-center d-block bg-info">

                   <p><span className="text-danger">**</span> Please send your CVs in PDF format.</p>

                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Career;
