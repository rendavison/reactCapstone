import React, { useState } from "react";

function getDate() {
    const today = new Date();
    const dayOfWeek = today.toLocaleDateString({weekday: 'long'});
    const month = today.getMonth();
    const day = today.getDate();
    return `${dayOfWeek}${month}${day}`;
}

const RezSelect = () => {

    const [rezDate, setRezDate] = useState(getDate()); //make pretty
    const [rezTime, setRezTime] = useState("12:00");
    const [rezPeople, setRezPeople] = useState("2");
    const [availableTimes, setAvailableTimes] = useState(["12:00", "12:15", "12:30", "12:45", "1:00", "1:15", "1:30", "1:45", "2:00", "2:15", "2:30", "2:45", "3:00", "3:15", "3:30", "3:45", "4:00", "4:15", "4:30", "4:45", "5:00", "5:15", "5:30", "5:45", "6:00", "6:15", "6:30", "6:45", "7:00", "7:15", "7:30", "7:45", "8:00"]);

    function populateTimes(userTime) {

        //finds the user's time in the array of available times
        //ADD ERROR IF TIME NOT IN ARRAY
        function findTime(time, timeRange) {
            const selectedTime = timeRange.find((e) => e === time);
            return timeRange.indexOf(selectedTime);
        }

        //generates a list of the next 12 times
        //ADD ERROR IF PAST 8:00PM
        const startingIndex = findTime(userTime, availableTimes); //finds index of user inputted time
        const displayedTimes = [availableTimes[startingIndex]]; //starts at that index in list of available times
        let currentIndex = startingIndex; //resets current index to keep moving along the array

        for (let i = 0; (i < 12); i++) {
            currentIndex += 1;
            displayedTimes.push(availableTimes[currentIndex]);
        }

        return displayedTimes; //returns array of times to display
    }

    return (
        <section>
            <fieldset class="rezselect">
                <div class="add-border">
                    <label for="guests">Guests</label><br/>
                    <select
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
                <div class="add-border">
                    <label for="date">Date</label><br/>
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
                    <label for="time">Time</label><br/>
                    <input
                    type="time"
                    value={rezTime}
                    onChange={((e) => {
                        setRezTime(e.target.value);
                    })}>
                </input>
                </div>
            </fieldset>

            <section class="date-time-ranges">
                {populateTimes({rezTime}).map(item => (
                    <button>
                        <h2>{item}</h2>
                    </button>
                ))}
            </section>

            <h1>Reservation for {rezDate} at {rezTime} for {rezPeople} people</h1>
        </section>
    )
}

export default RezSelect;