import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import OurAirCraft from "./Pages/OurAirCraft";
import Safety from "./Pages/Safety";
import Charters from "./Pages/Charters";
import ContactUs from "./Pages/ContactUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/OurAirCraft" element={<OurAirCraft />} />
          <Route path="/Safety" element={<Safety />} />
          <Route path="/Charters" element={<Charters />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
