const RezForm = () => {

    const rezDate = "";
    const rezTime = "";
    const rezPeople = "";

    return(
        <section>
            <h1>Reservation for {rezDate} at {rezTime} for {rezPeople} people</h1>

            <form class="rezform">
                <label for="fname">First Name:</label><br/>
                <input type="text" id="fname" name="fname" required></input><br/>

                <label for="lname">Last Name:</label><br/>
                <input type="text" id="lname" name="lname" required></input><br/>

                <label for="email">Email:</label><br/>
                <input type="email" id="email" name="email" required></input><br/>

                <label for="phone">Phone Number:</label><br/>
                <input type="tel" id="phone" name="phone" required></input><br/>

                <label for="occasion">Occasion:</label><br/>
                <select>
                    <option value="birthday">Birthday</option>
                    <option value="engagement">Engagement</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="other">Other</option>
                </select><br/>
                
                <fieldset name="allergies" required>
                    <legend>MY PARTY HAS FOOD ALLERGIES OR DIETARY RESTRICTIONS</legend><br/>

                    <input type="radio" id="allergies-yes" name="allergies-yes" value="Yes" checked></input>
                    <label for="allergies-yes">Yes</label>

                    <input type="radio" id="allergies-no" name="allergies-no" value="No"></input>
                    <label for="allergies-no">No</label>
                </fieldset>

                <label for="allergy-list">WHAT ARE THEY? PLEASE SEE ABOVE FOR WHAT RESTRICTIONS WE CAN AND CANNOT ACCOMMODATE</label><br/>
                <textarea id="allergy-list" anme="allergy-list" rows="5" cols="33" required></textarea><br/>

                <input type="submit" value="book"></input>
            </form>
        </section>
    )
}

export default RezForm;