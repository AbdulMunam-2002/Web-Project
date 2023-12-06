import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Aboutus from './Components/About';
import Contact from './Components/ContactUs';

function App() {
  return (
    <div className="App">
     <Header/>
     <Contact/>
     <Footer/>
     </div>
  );
}

export default App;
