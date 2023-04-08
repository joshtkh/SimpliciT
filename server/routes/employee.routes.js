const employeeController = require('../controllers/employee.controller');
const router = require('express').Router();

// First we set up the parameter route to fetch the required employee
router.param('id', employeeController.getEmployeeFromId);

// Set up the Employee routes
router.get('/api/employee/list', employeeController.listEmployees);
router.get('/api/employee/:id', employeeController.getEmployee);
router.post('/api/employee/create', employeeController.createEmployee);


router.post('/', async (req, res) =>{
    const {username, password} = req.body;

})
module.exports = router;