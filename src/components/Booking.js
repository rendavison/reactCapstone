import RezInfo from "./RezInfo";
import RezSelect from "./RezSelect";
//import RezForm from "./RezForm";
import RezFormFormik from "./RezFormFormik";
import { useReducer, redirect } from 'react';

export function initializeTimes() {
    // eslint-disable-next-line no-undef
    let timeList = fetchAPI(new Date());
    return timeList;
    //return ["12:00", "12:15", "12:30", "12:45", "1:00", "1:15", "1:30", "1:45", "2:00", "2:15", "2:30", "2:45", "3:00", "3:15", "3:30", "3:45", "4:00", "4:15", "4:30", "4:45", "5:00", "5:15", "5:30", "5:45", "6:00", "6:15", "6:30", "6:45", "7:00", "7:15", "7:30", "7:45", "8:00"]
}

export function updateTimes(availableTimes, date) {
    // eslint-disable-next-line no-undef
    const data = fetchAPI(new Date(date));
    return data;
}

export function submitForm(formData) {
    // eslint-disable-next-line no-undef
    if (submitAPI(formData)) {
        return redirect("/confirmation");
    }
}

// { type: 'UPDATE_TIMES', date: new Date() }

const Booking = () => {

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);
    // dispatch = (date) => { updateTimes(previousAvailableTimes, date) }

    return(
        <main>
            <RezInfo />
            <RezSelect
                availableTimes={availableTimes}
                dispatch={dispatch}
            />
            <RezFormFormik submitForm={submitForm}/>
        </main>
    )
}

export default Booking;