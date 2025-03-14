import RezInfo from "./RezInfo";
import RezSelect from "./RezSelect";
import RezFormFormik from "./RezFormFormik";
import { useReducer } from 'react';

export function initializeTimes() {
    // eslint-disable-next-line no-undef
    let timeList = fetchAPI(new Date());
    return timeList;
}

export function updateTimes(availableTimes, date) {
    // eslint-disable-next-line no-undef
    const data = fetchAPI(new Date(date));
    return data;
}

// { type: 'UPDATE_TIMES', date: new Date() }

const Booking = () => {

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);
    // dispatch = (date) => { updateTimes(previousAvailableTimes, date) }

    return(
        <main>
            <RezInfo />
            <RezSelect
                dispatch={dispatch}
                availableTimes={availableTimes}/>
            <RezFormFormik/> 
            {/* submitForm={SubmitForm} */}
        </main>
    )
}

export default Booking;