import RezInfo from "./RezInfo";
import RezSelect from "./RezSelect";
import RezForm from "./RezForm";
import { useState, useReducer } from 'react';

const updateTimes = (state, action) => {
    //return {availableTimes: state.availableTimes};
    return state;
}


const Booking = () => {

    const initializeTimes = {availableTimes: ["12:00", "12:15", "12:30", "12:45", "1:00", "1:15", "1:30", "1:45", "2:00", "2:15", "2:30", "2:45", "3:00", "3:15", "3:30", "3:45", "4:00", "4:15", "4:30", "4:45", "5:00", "5:15", "5:30", "5:45", "6:00", "6:15", "6:30", "6:45", "7:00", "7:15", "7:30", "7:45", "8:00"]}
    const [state, dispatch] = useReducer(updateTimes, initializeTimes);

    //const [availableTimes, setAvailableTimes] = useState(["12:00", "12:15", "12:30", "12:45", "1:00", "1:15", "1:30", "1:45", "2:00", "2:15", "2:30", "2:45", "3:00", "3:15", "3:30", "3:45", "4:00", "4:15", "4:30", "4:45", "5:00", "5:15", "5:30", "5:45", "6:00", "6:15", "6:30", "6:45", "7:00", "7:15", "7:30", "7:45", "8:00"]);

    return(
        <main>
            <RezInfo />
            <RezSelect availableTimes={availableTimes} />
            <RezForm />
        </main>
    )
}

export default Booking;