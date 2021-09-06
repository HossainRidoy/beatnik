import React from "react";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { emailPatten } from '../../../api/patten'
import ScssStyle from "./form.module.scss"

const Forms = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    alert('submit');
    console.log(data)
    reset()
  };
  return (
    <section className='pe-4'>
      <h3 className="">Let's Discuss Working Together.</h3>
      <form action="" onSubmit={handleSubmit(submit)}>
        <Form.Group controlId="fullName" className="my-3">
          <Form.Control
            className="font-Montserrat border-0 border-bottom"
            type="text"
            placeholder="Full Name"
            {...register("fullName", { required: true, minLength: 3 })}
          />
          {errors.fullName && (
            <Form.Text className="text-danger font-Montserrat">
              {errors.fullName.type === 'required' && "Inviid Name"}
              {errors.fullName.type === 'minLength' && "Minimum 3 characaters required"}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group controlId="email" className="my-3">
          <Form.Control
            className="font-Montserrat border-0 border-bottom"
            type="email"
            placeholder="Email"
            {...register("email", { required: true, pattern: emailPatten })}
          />
          {errors.email && (
            <Form.Text className="text-danger font-Montserrat">
              {errors.email.type === 'required' && "Inviid Email"}
              {errors.email.type === 'pattern' && "Please vaild Email"}
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group className="">
          <p className="font-Montserrat font-size-20">Project Budget</p>
          <div className="mt-2 d-flex flex-wrap justify-content-center justify-content-lg-start">
            <div className="form-group mb-1 mb-lg-0">
              <input className={ScssStyle.radioInput} type="radio" id="Under" name="radio" value="Under 75k" {...register("budget", { required: true })} />
              <label className={`font-Montserrat ms-2 ${ScssStyle.radioLabel}`} htmlFor="Under">Under 75k</label>
            </div>
            <div className="form-group mb-1 mb-lg-0 ms-3">
              <input className={ScssStyle.radioInput} type="radio" id="75k" name="radio" value="75k - 150k" {...register("budget", { required: true })} />
              <label className={`font-Montserrat ms-2 ${ScssStyle.radioLabel}`} htmlFor="75k">75k - 150k</label>
            </div>
            <div className="form-group mb-1 mb-lg-0 ms-3">
              <input className={ScssStyle.radioInput} type="radio" id="150k" name="radio" value="150k - 250k" {...register("budget", { required: true })} />
              <label className={`font-Montserrat ms-2 ${ScssStyle.radioLabel}`} htmlFor="150k">150k - 250k</label>
            </div>
            <div className="form-group mb-1 mb-lg-0 ms-3">
              <input className={ScssStyle.radioInput} type="radio" id="250k" name="radio" value="250k - 500k" {...register("budget", { required: true })} />
              <label className={`font-Montserrat ms-2 ${ScssStyle.radioLabel}`} htmlFor="250k">250k - 500k</label>
            </div>
            <div className="form-group mb-1 mb-lg-0 ms-3">
              <input className={ScssStyle.radioInput} type="radio" id="Above" name="radio" value="Above 500k" {...register("budget", { required: true })} />
              <label className={`font-Montserrat ms-2 ${ScssStyle.radioLabel}`} htmlFor="Above">Above 500k</label>
            </div>
          </div>
          {errors.budget && (
            <Form.Text className="text-danger font-Montserrat">
              {errors.budget.type === 'required' && "Please Inviid"}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group controlId="number" className="my-3 font-Montserrat">
          <Form.Control
            className="font-Montserrat border-0 border-bottom"
            type="number"
            placeholder="Contct Number"
            {...register("number", { required: true, minLength: 11 })}
          />
          {errors.number && (
            <Form.Text className="text-danger font-Montserrat">
              {errors.number.type === 'required' && "Inviid Number"}
              {errors.number.type === 'minLength' && "Minimum 11 characaters required"}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group controlId="query" className="my-3">
          <Form.Control
            className="font-Montserrat border-0 border-bottom"
            type="text"
            placeholder="Query"
            as='textarea'
            rows="4"
            {...register("query", { required: true, minLength: 20 })}
          />
          {errors.query && (
            <Form.Text className="text-danger font-Montserrat">
              {errors.query.type === 'required' && "Inviid query"}
              {errors.query.type === 'minLength' && "Minimum 20 word"}
            </Form.Text>
          )}
        </Form.Group>


        <div className="text-end my-4">
          <button className='border-0 px-4 py-2 font-Montserrat font-size-20 rounded-pill text-white' type="submit">Send</button>
        </div>
      </form>
    </section>
  );
};

export default Forms;
