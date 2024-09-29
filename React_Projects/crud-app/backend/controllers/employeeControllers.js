const Employee = require("../models/EmployeeSchema");
const Sequence = require("../models/SequenceSchema");

async function getNextSequenceValue(modelName) {
  const sequenceDocument = await Sequence.findOneAndUpdate(
    { model: modelName },
    { $inc: { seq: 1 } },
    { new: true, upsert: true }
  );
  return sequenceDocument.seq;
}

// get all employees

exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    console.error("Error while fetching employees:", error.message);
    res.status(500).send("Server Error!");
  }
};

// get employees by id

exports.getEmployeeById = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findOne({ EmployeeID: id });
    if (!employee) {
      return res.status(404).send("Employee not found!");
    }
    res.json(employee);
  } catch (error) {
    console.error("Error while fetching employee:", error.message);
    res.status(500).send("Server Error!");
  }
};

// create new employee

exports.createEmployee = async (req, res) => {
  const { EmployeeName, EmployeeRole } = req.body;
  try {
    const nextSeq = await getNextSequenceValue("Employee");
    const employeeID = "EMP" + nextSeq;

    const employeeCreate = new Employee({
      EmployeeID: employeeID,
      EmployeeName: EmployeeName,
      EmployeeRole: EmployeeRole,
    });
    await employeeCreate.save();
    res.json(employeeCreate);
  } catch (error) {
    console.error("Error while creating employee:", error.message);
    res.status(400).send("Server Error!");
  }
};

// update existing employee

exports.updateEmployee = async (req, res) => {
  const { EmployeeID } = req.params;
  try {
    const employee = await Employee.findOneAndUpdate(
      { EmployeeID: EmployeeID },
      req.body,
      { new: true }
    );
    if (!employee) {
      return res.status(404).json("Employee not found!");
    }
    res.json(employee);
  } catch (error) {
    console.error("Error while updating employee:", error.message);
    res.status(400).send("Invalid input");
  }
};

// delete existing employee

exports.deleteEmployee = async (req, res) => {
  try {
    const { EmployeeID } = req.params;
    const employee = await Employee.deleteOne({ EmployeeID: EmployeeID });
    if (!employee) {
      return res.status(404).json("Employee not found!");
    }
    res.json(employee);
  } catch (error) {
    console.error("Error while deleting employee:", error.message);
    res.status(404).send("Server Error!");
  }
};
