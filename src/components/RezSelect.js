import React, { useState } from "react";

function getDate() {
    const today = new Date();
    //const dayOfWeek = today.toLocaleDateString({weekday: 'long'});
    const month = today.getMonth();
    const day = today.getDate();
    return `${month} ${day}`;
}

const RezSelect = (props) => {

    const [rezDate, setRezDate] = useState(getDate()); //make pretty
    const [rezTime, setRezTime] = useState("12:00");
    const [rezPeople, setRezPeople] = useState("two");

    function splitTime(time) { //returns array of strings [hour, minute] from time
        const split = time.split(":");
        return split;
    }

    function convertTime(time) { //changes time to 12hr from 24hr
        const split = splitTime(time);
        const hour = parseInt(split[0]);
        const minute = split[1];
        if (hour > 12) {
            const pm = hour - 12;
            const newTime = pm.toString() + ":" + minute;
            return newTime;
        } else {
            return time;
        }
    }

    function populateTimes(userTime) {

        //finds the user's time in the array of available times
        // returns the index of the closest time in available times AFTER the user's time
        function findTime(time, timeRange) {

            const selectedTime = timeRange.find((e) => e === time);
            const selectedIndex = timeRange.indexOf(selectedTime);

            //if the user's time is NOT in the array of available times
            if (selectedIndex < 0) {
                const hr = splitTime(time)[0];
                const minute = splitTime(time)[1];

                for (let i = 0; i < timeRange.length; i++) {
                    let currentTime = timeRange[i];
                    let currentHour = splitTime(currentTime)[0];
                    let currentMinute = splitTime(currentTime)[1];
                    if (currentHour > hr) {
                        return i;
                    } else if (currentHour === hr) {
                        if (currentMinute >= minute) {
                            return i;
                        }
                    }
                }
            //if the user's time IS in the array of available times
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
                            props.dispatch(e.target.value);
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

            {props.availableTimes.length > 0 &&
                <section className="date-time-ranges">
                    {populateTimes(rezTime).map((item) => (
                        <button key={item}>
                            <h2>{convertTime(item)}</h2>
                        </button>
                    ))}
                </section>
            }

            <h1>Reservation for {rezDate} at {convertTime(rezTime)} for a table of {rezPeople}</h1>
        </section>
    )
}

export default RezSelect;