const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const prisma = require('../config/db');
const loginController = require('../controllers/login.controller');
const jwtSecret = process.env.JWT_SECRET;

router.post('/', loginController.login);

module.exports = router;
