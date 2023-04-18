const shiftController = require('../controllers/shift.controller');
const router = require('express').Router();

// routes go here
router.post('/create', shiftController.createShift);

// export
module.exports = router;