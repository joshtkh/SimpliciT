const prisma = require("../config/db");

// CREATE Employee Handler
// Called with a POST request to /api/employee/create
// This function will create a new employee using the data from req.body,
// and it will save the new employee into the database.
const createEmployee = function(req, res, next) {

};

// READ Employee Handler
// Called with GET request to /api/employee/:id
// This function will return the Employee object with the id provided in the URL
const getEmployee = function(req, res, next) {
    // The Employee is attached to req.employee from our getEmployeeFromId middleware.
    return res.status(200).json(req.employee);
}

// LIST Employee Handler
// Called with a GET request to /api/employee/list
// This function will return all the employees currently stored in the DB.
const listEmployees = function(req, res, next) {
    const employees = prisma.employee.findMany();
    // If employees === null then no records were found.
    if(employees === null) {
        return res.status(500).json({error: "No data found in Employee Table"});
    }
    // Otherwise, return the list of employees as json
    return res.status(200).json(employees);
}

// Parameter Middleware
// This function fetches the :id from the route, retrives the employee
// with that id, and stores it in req.employee, and passes this information
// to the next function in line.
const getEmployeeFromId = async function(req, res, next, id) {
    const employee = await prisma.employee.findUnique({
        where: {
            id: id,
        },
    })
    // If employee is null, no employee with the given ID was found.
    if(employee === null) {
        return res.status(500).json({error: `No Employee with id ${id} was found.`});
    }
    // Otherwise, an employee was found. Attach the employee to req.employee.
    req.employee = employee;
    // This is a middleware function, so we need to call the next function in line.
    return next();
}

// Export the controller functions for use in the router
module.exports = {
    getEmployee,
    listEmployees,
    getEmployeeFromId
}