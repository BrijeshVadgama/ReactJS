import React from "react";
import "../css/Style.css";
import craft1 from "../assets/craft1.jpg";
import craft2 from "../assets/craft2.jpg";
import craft3 from "../assets/craft3.jpg";
import craft4 from "../assets/craft4.jpg";

const OurAirCraft = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <h1 className="text-uppercase heading fw-bold">
            explorer our aircraft
          </h1>
          <p className="details fw-normal">
            At Airline, we take pride in offering an exceptional flying
            experience, and our commitment to excellence begins with our
            state-of-the-art aircraft fleet. Whether you're jetting off on a
            business trip or embarking on a well-deserved vacation, our diverse
            range of aircraft ensures that every journey is comfortable, safe,
            and memorable.
          </p>
        </div>
        <div className="row craftImg">
          <div className="col-md-6 col-12 position-relative">
            <img src={craft1} className="w-100 h-75 rounded" alt="craft1" />
            <h1 className="heading a220 fw-bold">A220</h1>
            <p className="details a220-det fw-bold">
              Purpose-built for efficiency
            </p>
          </div>
          <div className="col-md-6 col-12 position-relative">
            <img src={craft2} className="w-100 h-75 rounded" alt="craft2" />
            <h1 className="heading a320 fw-bold">A320</h1>
            <p className="details a320-det fw-bold">
              The most successful aircraft Family ever
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-12 position-relative">
            <img src={craft3} className="w-100 h-75 rounded" alt="craft3" />
            <h1 className="heading a380 fw-bold">A380</h1>
            <p className="details a380-det fw-bold">
              Unique passenger experience
            </p>
          </div>
          <div className="col-md-6 col-12 position-relative">
            <img src={craft4} className="w-100 h-75 rounded" alt="craft4" />
            <h1 className="heading a350 fw-bold">A350</h1>
            <p className="details a350-det fw-bold">The long range leader</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurAirCraft;
