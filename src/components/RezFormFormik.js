import React, { useState } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "yup-phone-lite";

const RezFormFormik = (props) => {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            tel: '',
            occasion: '',
            allergies: '',
            allergyList: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .required('Requried'),
            lastName: Yup.string()
                .required('Requried'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            tel: Yup.string()
                .phone("US", "Invalid phone number")
                .required('Required'),
            allergies: Yup.string()
                .required('An allergy selection is required'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 6))
        }
    })

    return(
        <section>
            <form className="rezform" onSubmit={formik.handleSubmit}>
                <section name="col-1">
                    <label htmlFor="firstName">First Name <sup>*</sup></label><br/>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                        onBlur={formik.handleBlur}>
                    </input>
                    {formik.touched.firstName && formik.errors.firstName ? (
                        <p>{formik.errors.firstName}</p>
                    ) : null}
                    <br/>

                    <label htmlFor="email">Email <sup>*</sup></label><br/>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        onBlur={formik.handleBlur}>
                    </input>
                    {formik.touched.email && formik.errors.email ? (
                        <p>{formik.errors.email}</p>
                    ) : null}
                    <br/>

                    <label htmlFor="occasion">Occasion:</label><br/>
                    <select
                        value={formik.values.occasion}
                        onChange={formik.handleChange}>
                        <option disabled selected value></option>
                        <option value="birthday">Birthday</option>
                        <option value="engagement">Engagement</option>
                        <option value="anniversary">Anniversary</option>
                        <option value="other">Other</option>
                    </select><br/>
                </section>


                <section name="col-2">
                    <label htmlFor="lastName">Last Name <sup>*</sup></label><br/>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}>
                    </input>
                    {formik.touched.lastName && formik.errors.lastName ? (
                        <p>{formik.errors.lastName}</p>
                    ) : null}
                    <br/>

                <label htmlFor="phone">Phone Number <sup>*</sup></label><br/>
                    <input
                        type="tel"
                        id="tel"
                        name="tel"
                        value={formik.values.tel}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}>
                    </input>
                    {formik.touched.tel && formik.errors.tel ? (
                        <p>{formik.errors.tel}</p>
                    ) : null}
                    <br/>
                </section>


                <fieldset name="allergies" className="double-col" required>
                    <legend>MY PARTY HAS FOOD ALLERGIES OR DIETARY RESTRICTIONS <sup>*</sup></legend><br/>

                    <label>
                        <input
                            type="radio"
                            name="allergies"
                            value="yes"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}>
                        </input>
                        Yes
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="allergies"
                            value="no"
                            onChange={formik.handleChange}>
                        </input>
                        No
                    </label>
                </fieldset>
                {formik.touched.allergies && formik.errors.allergies ? (
                    <p>{formik.errors.allergies}</p>
                ) : null}
                <br/>

                <label className="double-col" htmlFor="allergy-list">WHAT ARE THEY? PLEASE SEE ABOVE FOR WHAT RESTRICTIONS WE CAN AND CANNOT ACCOMMODATE</label>
                <textarea
                    className="double-col"
                    id="allergyList"
                    name="allergyList"
                    rows="5"
                    cols="33"
                    required
                    value={formik.values.allergyList}
                    onChange={formik.handleChange}>
                </textarea><br/>

                <section name="submit" className="double-col" aria-label="On Click">
                    <input type="submit" value="book" disabled={!formik.isValid}></input>
                </section>
            </form>
        </section>
    )
}

export default RezFormFormik;