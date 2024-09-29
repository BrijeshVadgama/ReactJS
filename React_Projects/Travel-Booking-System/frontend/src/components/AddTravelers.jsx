import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";

const AddTravelers = () => {
  const apiURL = "http://localhost:5000/travelers";
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [traveler, setTraveler] = useState({
    TravelerName: "",
    Destination: "",
    DepartureDate: "",
    ReturnDate: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id !== undefined) {
          const response = await axios.get(`${apiURL}/${id}`);
          setTraveler(response.data);
        } else {
          setTraveler({});
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching traveler:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="container mt-5 col-md-3">
      {loading ? (
        <div className="text-center mt-5">
          <i className="fas fa-spinner fa-spin fa-3x"></i>
        </div>
      ) : (
        <div className="shadow p-3 mb-5 bg-body rounded">
          {id === undefined ? (
            <h1 className="text-center">Add Traveler</h1>
          ) : (
            <h1 className="text-center">Edit Traveler</h1>
          )}

          <div className="mb-3">
            <label htmlFor="travelerName" className="form-label">
              Traveler Name
            </label>
            <input
              type="text"
              className="form-control"
              id="travelerName"
              value={traveler.TravelerName || ""}
              onChange={(e) => {
                setTraveler({ ...traveler, TravelerName: e.target.value });
              }}
              autoComplete="off"
              autoFocus
              placeholder="Enter Traveler Name"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Destination" className="form-label">
              Destination
            </label>
            <input
              type="text"
              className="form-control"
              id="Destination"
              value={traveler.Destination || ""}
              onChange={(e) => {
                setTraveler({ ...traveler, Destination: e.target.value });
              }}
              autoComplete="off"
              placeholder="Enter Destination"
            />
          </div>

          <div className="row">
            <div className="col">
              <div className="mb-3">
                <label htmlFor="DepartureDate" className="form-label">
                  Departure Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="DepartureDate"
                  value={
                    traveler.DepartureDate
                      ? moment(traveler.DepartureDate).format("YYYY-MM-DD")
                      : ""
                  }
                  onChange={(e) => {
                    setTraveler({ ...traveler, DepartureDate: e.target.value });
                  }}
                />
              </div>
            </div>
            <div className="col">
              <div className="mb-3">
                <label htmlFor="ReturnDate" className="form-label">
                  Return Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="ReturnDate"
                  value={
                    traveler.ReturnDate
                      ? moment(traveler.ReturnDate).format("YYYY-MM-DD")
                      : ""
                  }
                  onChange={(e) => {
                    setTraveler({ ...traveler, ReturnDate: e.target.value });
                  }}
                />
              </div>
            </div>
          </div>

          {id === undefined && (
            <button
              className="btn btn-primary"
              onClick={() => {
                fetch(apiURL, {
                  method: "POST",
                  body: JSON.stringify(traveler),
                  headers: {
                    "Content-Type": "application/json",
                  },
                })
                  .then((res) => {
                    if (res.ok) {
                      window.alert("Traveler added successfully..!");
                      navigate("/travelers");
                    }
                  })
                  .catch((error) => {
                    console.error("Error adding traveler:", error);
                  });
              }}
            >
              Add
            </button>
          )}
          {id !== undefined && (
            <button
              className="btn btn-primary"
              onClick={() => {
                fetch(`${apiURL}/${id}`, {
                  method: "PUT",
                  body: JSON.stringify(traveler),
                  headers: {
                    "Content-Type": "application/json",
                  },
                })
                  .then((res) => {
                    if (res.ok) {
                      window.alert("Traveler updated successfully..!");
                      navigate("/travelers");
                    }
                  })
                  .catch((error) => {
                    console.error("Error updating traveler:", error);
                  });
              }}
            >
              Update
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default AddTravelers;
