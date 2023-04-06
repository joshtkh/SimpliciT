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

}

// LIST Employee Handler
// Called with a GET request to /api/employee/list
// This function will return all the employees currently stored in the DB.
const listEmployees = function(req, res, next) {
    
}

// Parameter Middleware
// This function fetches the :id from the route, retrives the employee
// with that id, and stores it in req.employee, and passes this information
// to the next function in line.
const getEmployeeFromId = function(req, res, next, id) {

}

// Export the controller functions for use in the router
module.exports = {
    getEmployee,
    listEmployees,
    getEmployeeFromId
}