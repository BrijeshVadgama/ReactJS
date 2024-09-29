import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EmployeeOne = () => {
  const { id } = useParams();
  const apiURL = "http://localhost:5000/employees/";

  const [employee, setEmployee] = useState({});

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(apiURL + id);
        setEmployee(response.data);
      } catch (error) {
        console.error("Error While Fetching Employee: ", error);
      }
    };
    fetchEmployee();
  }, [id]);

  return (
    <div className="container">
      <br />
      <h1 className="text-center">Employee</h1>
      <br />
      <table className="table">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Employee Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{employee.EmployeeID}</td>
            <td>{employee.EmployeeName}</td>
            <td>{employee.EmployeeRole}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeOne;
