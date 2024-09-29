import React from "react";
import safety1 from "../assets/safety1.jpg";
import safety2 from "../assets/safety2.jpg";
import safety3 from "../assets/safety3.jpg";
import safety4 from "../assets/safety4.jpg";

const Safety = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-12">
            <h1 className="text-uppercase heading fw-bold">
              Safety First: Your Well-being in the Skies
            </h1>
            <p className="details fw-normal">
              Welcome aboard! At Airline, your safety is our top priority. We
              are dedicated to providing you with a secure and comfortable
              journey every time you fly with us. Here's how we ensure your
              safety from takeoff to landing:
            </p>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {/* 1 */}
          <div className="col">
            <div className="card h-100">
              <img src={safety1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title heading">
                  Rigorous Maintenance Standards
                </h5>
                <p className="card-text details">
                  Our fleet undergoes thorough maintenance checks according to
                  the highest industry standards. Our experienced maintenance
                  crews meticulously inspect and service each aircraft, ensuring
                  every component is in optimal condition before every flight.
                </p>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="col">
            <div className="card h-100">
              <img src={safety2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title heading">Highly Trained Crew</h5>
                <p className="card-text details">
                  Our pilots and cabin crew members are extensively trained
                  professionals who undergo rigorous training and regular
                  assessments. They are equipped with the latest knowledge and
                  skills to handle any situation that may arise during your
                  flight, prioritizing your safety above all else.
                </p>
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className="col">
            <div className="card h-100">
              <img src={safety3} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title heading">
                  State-of-the-Art Aircraft
                </h5>
                <p className="card-text details">
                  We operate with modern, state-of-the-art aircraft equipped
                  with advanced safety features and technologies. From advanced
                  avionics to robust structural design, our aircraft are built
                  to withstand even the most challenging conditions, providing
                  you with a safe and secure flying experience.
                </p>
              </div>
            </div>
          </div>

          {/* 4 */}
          <div className="col">
            <div className="card h-100">
              <img src={safety4} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title heading">
                  Continuous Monitoring and Improvement
                </h5>
                <p className="card-text details">
                  Safety is an ongoing commitment for us. We continuously
                  monitor and review our safety practices, procedures, and
                  performance to identify areas for improvement and implement
                  necessary measures to enhance the safety of our operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Safety;
