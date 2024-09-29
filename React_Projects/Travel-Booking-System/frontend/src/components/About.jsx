import React, { useState, useEffect } from "react";
import aboutData from "./AboutData";

import "../App.css";

const About = () => {
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setLoading(false);
  // }, []);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
      clearTimeout(delay);
    }, 500);
    return () => clearTimeout(delay);
  }, []);

  return (
    <div className="container">
      {loading ? (
        <div className="text-center mt-5">
          <i className="fas fa-spinner fa-spin fa-3x"></i>
        </div>
      ) : (
        <>
          <h2 className="text-center mt-5 mb-5">About Us</h2>
          <div className="underline"></div>
          <p style={{ textAlign: "justify" }}>{aboutData}</p>
        </>
      )}
    </div>
  );
};

export default About;
