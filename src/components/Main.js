import  { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Booking from "./Booking";

const Main = () => {
    return(
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/reservations" element={<Booking />}></Route>
            </Routes>
        </>
    )
}

export default Main;