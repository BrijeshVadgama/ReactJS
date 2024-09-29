import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { useNavigate, useParams } from "react-router-dom";

const TravelersDetails = () => {
  const { id } = useParams();
  const apiURL = "http://localhost:5000/travelers";
  const navigate = useNavigate();

  // get data from api

  const [traveler, setTraveler] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiURL}/${id}`);
        setTraveler(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // change date format
  const formatDate = (dateFormat) => {
    return moment(dateFormat).format("DD-MM-YYYY");
  };

  // display traveler details

  return (
    <div className="container">
      <div
        className="card shadow"
        style={{
          width: "28rem",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <div className="row p-2">
          <h5 className="text-secondary">Traveler Name</h5>
          <h5>{traveler.TravelerName}</h5>
        </div>
        <div className="row p-2 mt-2">
          <h5 className="text-secondary">Destination</h5>
          <h5>{traveler.Destination}</h5>
        </div>
        <div className="row p-2 mt-2">
          <div className="col">
            <h5 className="text-secondary">Departure Date</h5>
            <h5>{formatDate(traveler.DepartureDate)}</h5>
          </div>
          <div className="col">
            <h5 className="text-secondary">Return Date</h5>
            <h5>{formatDate(traveler.ReturnDate)}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelersDetails;
