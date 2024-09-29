import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AddUpdateEmployees = () => {
  const apiURL = "http://localhost:5000/employees/";
  const { id } = useParams();
  const navigate = useNavigate();
  const [employees, setEmployees] = useState({
    EmployeeName: "",
    EmployeeRole: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id !== undefined) {
          const response = await axios.get(apiURL + id);
          setEmployees(response.data);
        } else {
          setEmployees({});
        }
      } catch (error) {
        console.error("Error While fetching data: " + error);
      }
    };
    fetchData();
  }, [id]);

  const handleInsert = () => {
    fetch(apiURL, {
      method: "POST",
      body: JSON.stringify(employees),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        if (resp.ok) {
          window.alert("Employee Added Successfully..");
          navigate("/viewemployees");
        }
      })
      .catch((error) => {
        console.error("Error while adding employee: " + error);
      });
  };

  const handleUpdate = () => {
    fetch(apiURL + id, {
      method: "PUT",
      body: JSON.stringify(employees),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        if (resp.ok) {
          window.alert("Employee Update Successfully..");
          navigate("/viewemployees");
        }
      })
      .catch((error) => {
        console.error("Error while adding employee: " + error);
      });
  };

  return (
    <div className="container">
      <div className="mb-3">
        <label htmlFor="employeeName" className="form-label">
          Employee Name
        </label>
        <input
          type="text"
          className="form-control"
          id="employeeName"
          value={employees.EmployeeName || ""}
          onChange={(e) => {
            setEmployees({ ...employees, EmployeeName: e.target.value });
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="employeeRole" className="form-label">
          Employee Role
        </label>
        <input
          type="text"
          className="form-control"
          id="employeeRole"
          value={employees.EmployeeRole || ""}
          onChange={(e) => {
            setEmployees({ ...employees, EmployeeRole: e.target.value });
          }}
        />
      </div>

      {id === undefined && (
        <button className="btn btn-primary" onClick={() => handleInsert()}>
          Add
        </button>
      )}

      {id !== undefined && (
        <button className="btn btn-primary" onClick={() => handleUpdate()}>
          Update
        </button>
      )}
    </div>
  );
};

export default AddUpdateEmployees;
