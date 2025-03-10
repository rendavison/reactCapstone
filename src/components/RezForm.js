import React, { useState } from "react";
import { validateEmail } from "../utils/validateEmail";

const RezForm = () => {

    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [occasion, setOccasion] = useState("");
    const [lastName, setLastName] = useState("");
    const [tel, setTel] = useState({
        value: "",
        isTouched: false,
    });
    const [allergies, setAllergies] = useState("yes");
    const [allergyList, setAllergyList] = useState("");

    const emailErrorMessage = () => {
        return(
          <p className="field-error">Please enter a valid email address</p>
        );
    };

    const telErrorMessage = () => {
        return(
          <p className="field-error">Please enter a valid telephone number</p>
        );
    };

    const isFormValid = () => {
        return(
            firstName &&
            validateEmail(email) &&
            occasion &&
            lastName &&
            tel &&
            allergies &&
            allergyList
        )
    }

    const clearForm = () => {
        setFirstName("");
        setEmail("");
        setOccasion("");
        setLastName("");
        setTel("");
        setAllergies("yes");
        setAllergyList("");
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Your reservation has been received!");
        clearForm();
       };

    return(
        <section>
            <form class="rezform" onSubmit={handleSubmit}>
                <section name="col-1">
                    <label for="fname">First Name <sup>*</sup></label><br/>
                    <input
                        type="text"
                        id="fname"
                        name="fname"
                        required
                        value={firstName}
                        onChange={((e) => {
                            setFirstName(e.target.value);
                        })}>
                    </input><br/>

                    <label for="email">Email <sup>*</sup></label><br/>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={email}
                        onChange={((e) => {
                            setEmail(e.target.value);
                        })}>
                    </input><br/>

                    <label for="occasion">Occasion:</label><br/>
                    <select
                        value={occasion}
                        onChange={((e) => {
                            setOccasion(e.target.value);
                        })}>
                        <option disabled selected value></option>
                        <option value="birthday">Birthday</option>
                        <option value="engagement">Engagement</option>
                        <option value="anniversary">Anniversary</option>
                        <option value="other">Other</option>
                    </select><br/>
                </section>


                <section name="col-2">
                    <label for="lname">Last Name <sup>*</sup></label><br/>
                    <input
                        type="text"
                        id="lname"
                        name="lname"
                        required
                        value={lastName}
                        onChange={((e) => {
                            setLastName(e.target.value);
                        })}>
                    </input><br/>

                <label for="phone">Phone Number <sup>*</sup></label><br/>
                    <input
                        type="tel"
                        id="tel"
                        name="tel"
                        required
                        value={tel}
                        onChange={((e) => {
                            setTel(e.target.value);
                        })}>
                    </input><br/>
                </section>


                <fieldset name="allergies" class="double-col" required>
                    <legend>MY PARTY HAS FOOD ALLERGIES OR DIETARY RESTRICTIONS <sup>*</sup></legend><br/>

                    <label>
                        <input
                            type="radio"
                            id="allergies-yes"
                            name="allergies-yes"
                            value="yes"
                            checked={allergies === "yes"}
                            onChange={((e) => {
                                setAllergies(e.target.value)
                            })}>
                        </input>
                        Yes
                    </label>

                    <label>
                        <input
                            type="radio"
                            id="allergies-no"
                            name="allergies-no"
                            value="no"
                            checked={allergies === "no"}
                            onChange={((e) => {
                                setAllergies(e.target.value)
                            })}>
                        </input>
                        No
                    </label>
                </fieldset>
                <br/>

                <label class="double-col" for="allergy-list">WHAT ARE THEY? PLEASE SEE ABOVE FOR WHAT RESTRICTIONS WE CAN AND CANNOT ACCOMMODATE</label>
                <textarea
                    class="double-col"
                    id="allergy-list"
                    name="allergy-list"
                    rows="5"
                    cols="33"
                    required
                    value={allergyList}
                    onChange={((e) => {
                        setAllergyList(e.target.value);
                    })}>
                </textarea><br/>

                <section name="submit" class="double-col" aria-label="On Click">
                    <input type="submit" value="book" disabled={!isFormValid()}></input>
                </section>
            </form>
        </section>
    )
}

export default RezForm;