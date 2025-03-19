import  { Routes, Route } from "react-router";
import Home from "./Home";
import Booking from "./Booking";
import ConfirmedBooking from "./ConfirmedBooking";

const Main = () => {
    return(
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/reservations" element={<Booking />}></Route>
                <Route path="/confirmation" element={<ConfirmedBooking />}></Route>
            </Routes>
        </>
    )
}

export default Main;