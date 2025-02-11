//import logo from './logo.svg';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Booking from "./components/Booking";
import './App.css';
import  { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header/>
      <div id="container">
        <Nav/>
        <Main/>
        <Footer/>
      </div>

      <Routes>
        <Route path="/reservations" element={<Booking />}></Route>
      </Routes>
    </>
  );
}

export default App;
