//import logo from './logo.svg';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <>
      <Header/>
      <div id="container">
        <Nav/>
        <Main/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
