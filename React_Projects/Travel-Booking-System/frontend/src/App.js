import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import AddTravelers from "./components/AddTravelers";
import TravelersList from "./components/TravelersList";
import TravelersDetails from "./components/TravelersDetails";

const App = () => {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/addtraveler" element={<AddTravelers />} />
        <Route path="/addtraveler/:id" element={<AddTravelers />} />
        <Route path="/services" element={<Services />} />
        <Route path="/travelers" element={<TravelersList />} />
        <Route path="/travelers/:id" element={<TravelersDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
