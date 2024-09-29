import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import EmployeesList from "./pages/EmployeesList";
import EmployeeOne from "./pages/EmployeeOne";
import AddUpdateEmployees from "./pages/AddUpdateEmployees";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/viewemployees" element={<EmployeesList />}></Route>
          <Route path="/viewemployees/:id" element={<EmployeeOne />}></Route>
          <Route path="/addemployees" element={<AddUpdateEmployees />}></Route>
          <Route path="/addemployees/:id" element={<AddUpdateEmployees />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
