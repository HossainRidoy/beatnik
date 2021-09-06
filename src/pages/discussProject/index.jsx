import React from "react";
import Form from "./form";
import Address from "./address";
import Style from "./discussProject.module.scss";
const DiscussProject = () => {
  return (
    <section className={Style.discussProject}>
      <div className="container">
        <h1 className="text-center mb-5">Let's Talk</h1>
        <div className="row">
          <div className="col-12 col-md-7">
            <Form />
          </div>
          <div className="col-12 col-md-5">
            <Address />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscussProject;
