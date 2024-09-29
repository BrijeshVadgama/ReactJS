import React, { useState, useEffect } from "react";
import destinations from "./DestinationData";
import "../App.css";

const Services = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
      clearTimeout(delay);
    }, 1000);
    return () => clearTimeout(delay);
  }, []);

  return (
    <div className="container">
      {loading ? (
        // Display preloader while loading
        <div className="text-center mt-5">
          <i className="fas fa-spinner fa-spin fa-3x"></i>
        </div>
      ) : (
        <>
          <h3 className="text-center mt-5 mb-5">
            Some of the Places We Offer:
          </h3>
          <div className="row">
            {destinations.map((destination, index) => (
              <div key={index} className="col-lg-3 col-md-6 mb-4">
                <div className="card h-100">
                  {" "}
                  {/* Added h-100 class */}
                  <img
                    src={destination.image}
                    className="card-img-top destination-image"
                    alt={destination.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title" style={{ color: "#D61B3C" }}>
                      {destination.name}
                    </h5>
                    <p className="card-text">
                      <b>Price:</b> {destination.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3" style={{ textAlign: "justify" }}>
            In addition to the destinations listed above, our travel booking
            system provides access to an extensive selection of captivating
            destinations around the globe. Whether you're dreaming of wandering
            through historic European cities, basking in the sun on tropical
            islands, or embarking on epic adventures in breathtaking natural
            landscapes, we have something for every traveler's taste and
            preference. With our diverse range of offerings, you can discover
            hidden gems, immerse yourself in diverse cultures, and create
            unforgettable memories that will last a lifetime. Explore our
            website to uncover our complete list of destinations and start
            planning your next unforgettable journey today!
          </p>
        </>
      )}
    </div>
  );
};

export default Services;
