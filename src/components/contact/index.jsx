import React from 'react'
import Image from "../../assets/images/contact/1.png"
import { useForm } from "react-hook-form";
import Style from "./contact.module.scss"
import { emailPatten, numberPatten } from "../../api/patten"

const Contact = () => {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        alert("done")
        console.log(data)
        reset()
    }


    return (
        <section className="mt-5">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-6">
                        <div className="text-center">
                        <img className='img-fluid' src={Image} alt="" />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 bg-secondary">
                        <div className="p-4">
                            <h3 className="mb-1">Get in touch with us</h3>
                            <p className="font-size-14 font-Montserrat">Our techy marketing team is always ready to help. Give us a call, drop us an email, or just fill in the form below to instantly schedule a call with us.</p>

                            <form action="" onSubmit={handleSubmit(onSubmit)} className="mt-4 font-Montserrat">
                                <div className="row">
                                    <div className="col-12 col-lg-4">
                                        <div className="form-group mb-3">
                                            <input className={`form-control ${Style.formControl}`} type="text" placeholder="Full Name"
                                                {...register("fullName", { required: true, minLength: 3 })} />
                                            {errors.fullName && <label className='text-danger font-size-14'>
                                                {errors.fullName.type === 'required' && 'Full name required'}
                                                {errors.fullName.type === 'minLength' && 'Minimum 3 characaters required'}
                                            </label>}
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-4">
                                        <div className="form-group mb-3">
                                            <input className={`form-control ${Style.formControl}`} type="text" placeholder="Email"
                                                {...register("email", { required: true, pattern: emailPatten })} />
                                            {errors.email && <label className='text-danger font-size-14'>
                                                {errors.email.type === 'required' && 'Email required'}
                                                {errors.email.type === 'pattern' && 'Invalid email address'}
                                            </label>}
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-4 ">
                                        <div className="form-group mb-3">
                                            <input className={`form-control ${Style.formControl}`} type="text" placeholder="0123456789"
                                                {...register("number", { required: true, minLength: 11 })} />
                                            {errors.number && <label className='text-danger font-size-14'>
                                                {errors.number.type === 'required' && 'number required'}
                                                {errors.number.type === 'minLength' && 'minLength 11 characaters required'}
                                            </label>}
                                        </div>
                                    </div>
                                    <div className="form-group mb-3">
                                        <textarea rows="6" className={`form-control ${Style.formControl}`} type="text" placeholder="Query"
                                            {...register("query", { required: true, minLength: 11 })} />
                                        {errors.query && <label className='text-danger font-size-14'>
                                            {errors.query.type === 'required' && 'query required'}
                                            {errors.query.type === 'minLength' && 'minLength 11 characaters required'}

                                        </label>}
                                    </div>
                                </div>
                                <div className="text-end mt-4">
                                    <button className='px-4 py-2 rounded border-0' type="submit">Submit</button>
                                </div>
                            </form>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
