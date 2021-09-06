import React from "react";
import StyleScss from "./applicationForm.module.scss"
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { emailPatten } from "../../../api/patten";
// import Select from "react-select";

// const customStyles = {

//     control: (base) => ({
//         ...base,
//         background: "#f8f9fa ",
//         border: "none",
//     }),
//     menu: (base) => ({
//         ...base,
//         borderRadius: 0,

//         marginTop: 0,
//     }),
//     menuList: (base) => ({
//         ...base,
//         padding: 0,
//     }),
// };

// const options = [
//     {
//         value: "Select your preferred Messenger ?",
//         label: "Select your preferred Messenger ?",
//     },
//     { value: "facebook", label: "facebook" },
//     { value: "wratsapp", label: "wratsapp" },
// ];
// const country1 = [
//     { value: "Bangladesh", label: "Bangladesh" },
//     { value: "India", label: "India" },
//     { value: "Pakistan", label: "Pakistan" },
// ];
// const country2 = [
//     {
//         value: "How much time can you spend with WDI per week?",
//         label: "How much time can you spend with WDI per week?",
//     },
//     { value: "us", label: "us" },
//     { value: "canada", label: "canada" },
// ];

// const country3 = [
//     {
//         value: "Do you have any experience in ? *",
//         label: "Do you have any experience in ? *",
//     },
//     { value: "us", label: "us" },
//     { value: "canada", label: "canada" },
// ];

// const country4 = [
//     {
//         value: "When would you like to start ?",
//         label: "When would you like to start ?",
//     },
//     { value: "us", label: "us" },
//     { value: "canada", label: "canada" },
// ];



function ApplicationForm() {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();


    const submitForm = (data) => {
        alert("submit");
        console.log(data)
        reset()
    };


    return (
        <section className="py-5">
            <div className="container">
                <h2 className={`pb-5 mt-3 ${StyleScss.h2}`}>Submit Your Application Today</h2>

                <form
                    action=""
                    onSubmit={handleSubmit(submitForm)}
                    className="font-Montserrat"
                >
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <Form.Group controlId="fullname" className="mb-3">
                                <Form.Control
                                    style={{ padding: "12px 10px" }}
                                    className="bg-light border-0"
                                    type="text"
                                    placeholder="Full Name *"
                                    {...register("fullname", { required: true, minLength: 3 })}
                                />
                                {errors.fullname && (
                                    <Form.Text className="text-danger">
                                        {errors.fullname.type === "required" && "Invalid Full Name"}
                                        {errors.fullname.type === "minLength" &&
                                            "Minimum 3 characaters required"}
                                    </Form.Text>
                                )}
                            </Form.Group>

                            <Form.Group controlId="email" className="mb-3">
                                <Form.Control
                                    style={{ padding: "12px 10px" }}
                                    className="bg-light border-0"
                                    type="email"
                                    placeholder="Emial *"
                                    {...register("email", {
                                        required: true,
                                        pattern: emailPatten,
                                    })}
                                />
                                {errors.email && (
                                    <Form.Text className="text-danger">
                                        {errors.email.type === "required" &&
                                            "Invalid email address"}
                                        {errors.email.type === "pattern" && "Invalid email address"}
                                    </Form.Text>
                                )}
                            </Form.Group>

                            {/* <Form.Group controlId="options" className="mb-3">
                                <Select
                                    defaultValue={options[0]}
                                    options={options}
                                    styles={customStyles}
                                />

                            </Form.Group> */}

                            <Form.Group className="mb-3">
                                <select className="border-0 w-100 bg-light py-3 px-2" name="" id="" 
                                {...register("socilMedia", { required: true })}>
                                    <option value="">Do you have any experience in ?</option>
                                    <option value="facebook">facebook</option>
                                    <option value="whatsApp">whatsApp</option>
                                </select>
                                {errors.socilMedia && (
                                    <Form.Text className="text-danger">
                                        {errors.socilMedia.type === "required" &&
                                            "Do you have any experience in ?"}
                                    </Form.Text>
                                )}
                            </Form.Group>

                            <Form.Group controlId="address" className="mb-3">
                                <Form.Control
                                    style={{ padding: "12px 10px" }}
                                    className="bg-light border-0"
                                    type="text"
                                    placeholder="Address Line 1"
                                    {...register("address", { required: true, minLength: 3 })}
                                />
                                {errors.address && (
                                    <Form.Text className="text-danger">
                                        {errors.address.type === "required" &&
                                            "Invalid address Line 1"}
                                        {errors.address.type === "minLength" &&
                                            "Minimum 3 characaters required"}
                                    </Form.Text>
                                )}
                            </Form.Group>

                            {/* <Form.Group controlId="country1" className="mb-3">
                                <Select
                                    className="bg-light-dark p-2"
                                    options={country1}
                                    defaultValue={country1[0]}
                                    styles={customStyles}
                                />
                            </Form.Group> */}
                            <Form.Group className="mb-3">
                                <select className="border-0 w-100 bg-light py-3 px-2" name="" id="" 
                                {...register("country1", { required: true })}>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="India">India</option>
                                    <option value="Pakistar">Pakistar</option>
                                </select>
                                {errors.country1 && (
                                    <Form.Text className="text-danger">
                                        {errors.country1.type === "required" &&
                                            "Please valid country"}
                                    </Form.Text>
                                )}
                            </Form.Group>

                            <Form.Group controlId="postalCode" className="mb-3">
                                <Form.Control
                                    style={{ padding: "12px 10px" }}
                                    className="bg-light border-0"
                                    type="text"
                                    placeholder="Postal Code "
                                    {...register("postalCode", { required: true })}
                                />
                                {errors.postalCode && (
                                    <Form.Text className="text-danger">
                                        {errors.postalCode.type === "required" &&
                                            "Invalid Postal Code"}
                                    </Form.Text>
                                )}
                            </Form.Group>

                            <Form.Group controlId="qualification" className="mb-3">
                                <Form.Control
                                    style={{ padding: "12px 10px" }}
                                    className="bg-light border-0"
                                    type="text"
                                    placeholder="Qualification"
                                    {...register("qualification", { required: true })}
                                />
                                {errors.postalCode && (
                                    <Form.Text className="text-danger">
                                        {errors.qualification.type === "required" &&
                                            "Invalid Qualification"}
                                    </Form.Text>
                                )}
                            </Form.Group>

                            {/* <Form.Group controlId="country2" className="mb-3">
                                <Select
                                    className="bg-light-dark"
                                    options={country2}
                                    defaultValue={country2[0]}
                                    styles={customStyles}
                                />
                            </Form.Group> */}

                            <Form.Group className="mb-3">
                                <select className="border-0 w-100 bg-light py-3 px-2" name="" id="" 
                                {...register("country2", { required: true })}>
                                    <option value="">How much time can you spend with WDI per week?</option>
                                    <option value="us">us</option>
                                    <option value="canada">canada</option>
                                </select>
                                {errors.country2 && (
                                    <Form.Text className="text-danger">
                                        {errors.country2.type === "required" &&
                                            "Please valid country"}
                                    </Form.Text>
                                )}
                            </Form.Group>
                            
                        </div>

                        <div className="col-12 col-md-6">
                            <Form.Group controlId="companyName" className="mb-3">
                                <Form.Control
                                    style={{ padding: "12px 10px" }}
                                    className="bg-light border-0"
                                    type="text"
                                    placeholder="Business/Company Name (if registered)"
                                    {...register("companyName", { required: true, minLength: 3 })}
                                />
                                {errors.companyName && (
                                    <Form.Text className="text-danger">
                                        {errors.companyName.type === "required" &&
                                            "Invalid Company Name"}
                                        {errors.companyName.type === "minLength" &&
                                            "Minimum 3 characaters required"}
                                    </Form.Text>
                                )}
                            </Form.Group>

                            <Form.Group controlId="contactNumber" className="mb-3">
                                <Form.Control
                                    style={{ padding: "12px 10px" }}
                                    className="bg-light border-0"
                                    type="text"
                                    placeholder="Contact Number *"
                                    {...register("contactNumber", {
                                        required: true,
                                        minLength: 3,
                                    })}
                                />
                                {errors.contactNumber && (
                                    <Form.Text className="text-danger">
                                        {errors.contactNumber.type === "required" &&
                                            "Invalid Contact Number"}
                                        {errors.contactNumber.type === "minLength" &&
                                            "Minimum 3 characaters required"}
                                    </Form.Text>
                                )}
                            </Form.Group>

                            <Form.Group controlId="messengerId" className="mb-3">
                                <Form.Control
                                    style={{ padding: "12px 10px" }}
                                    className="bg-light border-0"
                                    type="text"
                                    placeholder="Messenger Id"
                                    {...register("messengerId", { required: true, minLength: 3 })}
                                />
                                {errors.messengerId && (
                                    <Form.Text className="text-danger">
                                        {errors.messengerId.type === "required" &&
                                            "Invalid Messenger Id"}
                                        {errors.messengerId.type === "minLength" &&
                                            "Minimum 3 characaters required"}
                                    </Form.Text>
                                )}
                            </Form.Group>

                            <Form.Group controlId="address2" className="mb-3">
                                <Form.Control
                                    style={{ padding: "12px 10px" }}
                                    className="bg-light border-0"
                                    type="text"
                                    placeholder="Address Line 2"
                                    {...register("address2", { required: true, minLength: 3 })}
                                />
                                {errors.address2 && (
                                    <Form.Text className="text-danger">
                                        {errors.address2.type === "required" &&
                                            "Invalid address Line 2"}
                                        {errors.address2.type === "minLength" &&
                                            "Minimum 3 characaters required"}
                                    </Form.Text>
                                )}
                            </Form.Group>

                            <Form.Group controlId="city" className="mb-3">
                                <Form.Control
                                    style={{ padding: "12px 10px" }}
                                    className="bg-light border-0"
                                    type="text"
                                    placeholder="City"
                                    {...register("city", { required: true, minLength: 2 })}
                                />
                                {errors.city && (
                                    <Form.Text className="text-danger">
                                        {errors.city.type === "required" && "Invalid City"}
                                        {errors.city.type === "minLength" &&
                                            "Minimum 2 characaters required"}
                                    </Form.Text>
                                )}
                            </Form.Group>

                            <Form.Group controlId="dateOfBirth" className="mb-3">
                                <Form.Control
                                    style={{ padding: "12px 10px" }}
                                    className="bg-light border-0"
                                    type="text"
                                    placeholder="Date Of Birth"
                                    {...register("dateOfBirth", { required: true })}
                                />
                                {errors.dateOfBirth && (
                                    <Form.Text className="text-danger">
                                        {errors.dateOfBirth.type === "required" &&
                                            "Invalid Date Of Birth"}
                                        {/* {errors.dateOfBirth.type === 'minLength' && "Minimum 2 characaters required"} */}
                                    </Form.Text>
                                )}
                            </Form.Group>

                            {/* <Form.Group controlId="country3" className="mb-3">
                                <Select
                                    className="bg-light-dark"
                                    options={country3}
                                    defaultValue={country3[0]}
                                    styles={customStyles}
                                />
                            </Form.Group> */}
                              <Form.Group className="mb-3">
                                <select className="border-0 w-100 bg-light py-3 px-2" name="" id="" 
                                {...register("country3", { required: true })}>
                                    <option value="">Do you have any experience in ?</option>
                                    <option value="us">us</option>
                                    <option value="canada">canada</option>
                                </select>
                                {errors.country3 && (
                                    <Form.Text className="text-danger">
                                        {errors.country3.type === "required" &&
                                            "Please valid country"}
                                    </Form.Text>
                                )}
                            </Form.Group>

                            {/* <Form.Group controlId="country4" className="mb-3">
                                <Select
                                    className="bg-light-dark"
                                    options={country4}
                                    defaultValue={country4[0]}
                                    styles={customStyles}
                                />
                            </Form.Group> */}
                             <Form.Group className="mb-3">
                                <select className="border-0 w-100 bg-light py-3 px-2" name="" id="" 
                                {...register("country4", { required: true })}>
                                    <option value="">When would you like to start ?</option>
                                    <option value="us">us</option>
                                    <option value="canada">canada</option>
                                </select>
                                {errors.country4 && (
                                    <Form.Text className="text-danger">
                                        {errors.country4.type === "required" &&
                                            "Please valid country"}
                                    </Form.Text>
                                )}
                            </Form.Group>
                        </div>
                    </div>
                    <Form.Group controlId="textarea1" className="mb-3">
                        <Form.Control
                            style={{ padding: "12px 10px" }}
                            className="bg-light border-0"
                            type="text"
                            as="textarea"
                            rows="5"
                            placeholder="Query"
                            {...register("textarea1", { required: true, minLength: 10 })}
                        />
                        {errors.textarea1 && (
                            <Form.Text className="text-danger">
                                {errors.textarea1.type === "required" && "Invalid Query"}
                                {errors.textarea1.type === "minLength" &&
                                    "Minimum 10 characaters required"}
                            </Form.Text>
                        )}
                    </Form.Group>

                    <Form.Group controlId="textarea2" className="mb-3">
                        <Form.Control
                            style={{ padding: "12px 10px" }}
                            className="bg-light border-0"
                            type="text"
                            as="textarea"
                            rows="5"
                            placeholder="Query"
                            {...register("textarea2", { required: true, minLength: 10 })}
                        />
                        {errors.textarea2 && (
                            <Form.Text className="text-danger">
                                {errors.textarea2.type === "required" && "Invalid Query"}
                                {errors.textarea2.type === "minLength" &&
                                    "Minimum 10 characaters required"}
                            </Form.Text>
                        )}
                    </Form.Group>

                    <div className="text-end mt-5">
                        <button className="border-0 px-4 py-2" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default ApplicationForm;
