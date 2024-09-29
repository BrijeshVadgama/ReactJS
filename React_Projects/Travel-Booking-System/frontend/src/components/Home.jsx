import React, { useEffect, useState } from "react";
import backgroundImg from "../assets/background.jpg"; // Import the background image

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    // document.body.style.overflow = "hidden";
  }, []);

  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: `url(${backgroundImg})`, // Set the background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        position: "relative", // Set position relative to ensure proper centering
      }}
    >
      {loading ? (
        <div className="text-center mt-5">
          <i className="fas fa-spinner fa-spin fa-3x"></i>
        </div>
      ) : (
        <h1
          className="text-center"
          style={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#888", // Set text color to white
          }}
        >
          Welcome to Travel Booking System
        </h1>
      )}
    </div>
  );
};

export default Home;
