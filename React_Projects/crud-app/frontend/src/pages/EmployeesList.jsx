import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EmployeesList = () => {
  const apiURL = "http://localhost:5000/employees/";
  const navigate = useNavigate();
  const [employeesList, setEmployeesList] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = () => {
    axios
      .get(apiURL)
      .then((response) => {
        setEmployeesList(response.data);
      })
      .catch((error) => {
        console.error("Error While Fetching Employes: ", error);
      });
  };

  const handleView = (id) => {
    navigate(`/viewemployees/${id}`);
  };

  const handleUpdate = (id) => {
    navigate(`/addemployees/${id}`);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete employee!!"
    );
    if (confirmDelete) {
      axios
        .delete(apiURL + id)
        .then(() => {
          fetchEmployees();
        })
        .catch((error) => {
          console.error("Error While Deleting Employee: ", error);
        });
    }
  };

  return (
    <div className="container">
      <br />
      <h1 className="text-center">Employees List</h1>
      <br />
      <table className="table">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Employee Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employeesList.map((e) => (
            <tr key={e.EmployeeID}>
              <td>{e.EmployeeID}</td>
              <td>{e.EmployeeName}</td>
              <td>{e.EmployeeRole}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleView(e.EmployeeID)}
                >
                  View
                </button>
                <button
                  className="btn btn-success ms-5"
                  onClick={() => handleUpdate(e.EmployeeID)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger ms-5"
                  onClick={() => handleDelete(e.EmployeeID)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeesList;
