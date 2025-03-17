import  { Routes, Route } from "react-router";
import Home from "./Home";
import Booking from "./Booking";
import ConfirmedBooking from "./ConfirmedBooking";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const SubmitForm = (formData) => {
    const navigate = useNavigate();
    useEffect((formData) => {
        // eslint-disable-next-line no-undef
        if(submitAPI(formData)) {
            console.log("pressed")
            navigate("/confirmation");
        }
    }, );
}

const Main = () => {
    return(
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/reservations" element={<Booking submitForm={SubmitForm} />}></Route>
                <Route path="/confirmation" element={<ConfirmedBooking />}></Route>
            </Routes>
        </>
    )
}

export default Main;