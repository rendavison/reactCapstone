import React, { useState } from "react";

function getDate() {
    const today = new Date();
    const dayOfWeek = today.toLocaleDateString({weekday: 'long'});
    const month = today.getMonth();
    const day = today.getDate();
    return `${dayOfWeek}${month}${day}`;
}

const RezSelect = (props) => {

    const [rezDate, setRezDate] = useState(getDate()); //make pretty
    const [rezTime, setRezTime] = useState("12:00");
    const [rezPeople, setRezPeople] = useState("2");

    function populateTimes(userTime) {

        //finds the user's time in the array of available times
        //ADD ERROR IF TIME NOT IN ARRAY
        function findTime(time, timeRange) {
            console.log(time, timeRange);
            const selectedTime = timeRange.find((e) => e === time);
            const selectedIndex = timeRange.indexOf(selectedTime);
            if (selectedIndex < 0) {
                return 0;
            } else {
                return selectedIndex;
            }
        }

        //generates a list of the next 12 times
        const startingIndex = findTime(userTime, props.availableTimes); //finds index of user inputted time
        return props.availableTimes.slice(startingIndex);
    }

    return (
        <section>
            <fieldset className="rezselect">
                <div className="add-border">
                    <label htmlFor="guests">Guests</label><br/>
                    <select
                        required
                        value={rezPeople}
                        onChange={((e) => {
                            setRezPeople(e.target.value);
                        })}>
                        <option value="one">1 person</option>
                        <option value="two" selected>2 people</option>
                        <option value="three">3 people</option>
                        <option value="four">4 people</option>
                        <option value="five">5 people</option>
                        <option value="six">6 people</option>
                        <option value="seven">7 people</option>
                        <option value="eight">8 people</option>
                        <option value="nine">9 people</option>
                        <option value="ten">10 people</option>
                        <option value="eleven">11 people</option>
                        <option value="twelve">12 people</option>
                    </select>
                </div>
                <div className="add-border">
                    <label htmlFor="date">Date</label><br/>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={rezDate}
                        onChange={((e) => {
                            setRezDate(e.target.value);
                        })}>
                    </input>
                </div>
                <div>
                    <label htmlFor="time">Time</label><br/>
                    <input
                    type="time"
                    step={60 * 15 /* seconds */}
                    value={rezTime}
                    onChange={((e) => {
                        setRezTime(e.target.value);
                    })}>
                </input>
                </div>
            </fieldset>

            <section className="date-time-ranges">
                {populateTimes(rezTime).map((item) => (
                    <button key={item}>
                        <h2>{item}</h2>
                    </button>
                ))}
            </section>

            <h1>Reservation for {rezDate} at {rezTime} for a table of {rezPeople}</h1>
        </section>
    )
}

export default RezSelect;