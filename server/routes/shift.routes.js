const shiftController = require('../controllers/shift.controller');
const router = require('express').Router();

// routes go here
router.param('empId', shiftController.getShiftFromEmployeeId);
router.param('id', shiftController.getShiftFromId);
router.get('/hours/:empId', shiftController.getShiftEmp);
router.get('/:id', shiftController.getShift);
router.post('/create', shiftController.createShift);
router.delete('/:id')

// export
module.exports = router;