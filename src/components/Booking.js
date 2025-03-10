import RezInfo from "./RezInfo";
import RezSelect from "./RezSelect";
import RezForm from "./RezForm";
import { useReducer, useEffect } from 'react';
import { fetchAPI } from '../utils/fakeAPI';


const Booking = () => {

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

    function initializeTimes(date) {
        let timeList = fetchAPI(new Date(date));
        return timeList;
        //return ["12:00", "12:15", "12:30", "12:45", "1:00", "1:15", "1:30", "1:45", "2:00", "2:15", "2:30", "2:45", "3:00", "3:15", "3:30", "3:45", "4:00", "4:15", "4:30", "4:45", "5:00", "5:15", "5:30", "5:45", "6:00", "6:15", "6:30", "6:45", "7:00", "7:15", "7:30", "7:45", "8:00"]
    }

    function updateTimes(state, action) {
        let availableTimes = state;
        return availableTimes;
    }

    return(
        <main>
            <RezInfo />
            <RezSelect availableTimes={initializeTimes()} />
            <RezForm />
        </main>
    )
}

export default Booking;