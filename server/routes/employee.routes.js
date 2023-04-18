const employeeController = require('../controllers/employee.controller');
const router = require('express').Router();

// First we set up the parameter route to fetch the required employee
router.param('id', employeeController.getEmployeeFromId);

// Set up the Employee routes
router.get('/list', employeeController.listEmployees);
router.get('/:id', employeeController.getEmployee);
router.post('/create', employeeController.createEmployee);

router.post('/', async (req, res) =>{
    const {username, password} = req.body;

})
module.exports = router;