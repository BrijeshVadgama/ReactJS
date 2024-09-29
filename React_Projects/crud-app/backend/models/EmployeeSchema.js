const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    EmployeeID: {
      type: String,
      required: true,
      unique: true,
    },
    EmployeeName: {
      type: String,
      required: true,
    },
    EmployeeRole: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
