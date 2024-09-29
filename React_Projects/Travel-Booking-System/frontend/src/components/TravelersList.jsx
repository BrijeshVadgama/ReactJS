import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import "../App.css";

const ViewTravelers = () => {
  const apiURL = "http://localhost:5000/travelers";
  const navigate = useNavigate();
  const [travelersList, setTravelersList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTravelers();
  }, []);

  const fetchTravelers = () => {
    axios
      .get(apiURL)
      .then((response) => {
        setTravelersList(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching travelers:", error);
        setLoading(false);
      });
  };

  const handleView = (id) => {
    navigate(`/travelers/${id}`);
  };

  const handleUpdate = (id) => {
    navigate(`/addtraveler/${id}`);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete..?");
    if (confirmDelete) {
      axios
        .delete(`${apiURL}/${id}`)
        .then(() => {
          fetchTravelers();
        })
        .catch((error) => {
          console.error("Error deleting traveler:", error);
        });
    }
  };

  const formatDate = (dateFormat) => {
    return moment(dateFormat).format("DD-MM-YYYY");
  };

  return (
    <div className="container">
      <br />
      <h1 className="text-center">Travelers List</h1>
      <br />
      {loading ? (
        <div className="text-center">
          <i className="fas fa-spinner fa-spin fa-3x"></i>
        </div>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Traveler Name</th>
              <th>Destination</th>
              {/* <th>Departure Date</th>
              <th>Return Date</th> */}
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {travelersList.map((traveler) => (
              <tr key={traveler.BookingID}>
                <td>{traveler.BookingID}</td>
                <td>{traveler.TravelerName}</td>
                <td>{traveler.Destination}</td>
                {/* <td>{formatDate(traveler.DepartureDate)}</td>
                <td>{formatDate(traveler.ReturnDate)}</td> */}
                <td>
                  <i
                    className="fa-solid fa-eye text-success"
                    onClick={() => handleView(traveler.BookingID)}
                  ></i>
                  <i
                    className="fa-solid fa-pen-to-square ms-2 text-primary"
                    onClick={() => handleUpdate(traveler.BookingID)}
                  ></i>
                  <i
                    className="fas fa-trash text-danger ms-2"
                    onClick={() => handleDelete(traveler.BookingID)}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewTravelers;
