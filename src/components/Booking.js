/* global fetchAPI, submitAPI */
import RezInfo from "./RezInfo";
import RezSelect from "./RezSelect";
import RezFormFormik from "./RezFormFormik";
import { useReducer } from 'react';
import { useNavigate } from "react-router";

export function initializeTimes() {
    let timeList = fetchAPI(new Date());
    return timeList;
}

export function updateTimes(availableTimes, date) {
    const data = fetchAPI(new Date(date));
    return data;
}

// { type: 'UPDATE_TIMES', date: new Date() }

const Booking = () => {

    const navigate = useNavigate();

    function confirmBooking(formData) {
        if(submitAPI(formData)) {
            console.log("pressed")
            navigate("/confirmation");
        }
    }

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);
    // dispatch = (date) => { updateTimes(previousAvailableTimes, date) }

    return(
        <main>
            <RezInfo />
            <RezSelect
                dispatch={dispatch}
                availableTimes={availableTimes}/>
            <RezFormFormik
                submitForm={confirmBooking}/>
        </main>
    )
}

export default Booking;