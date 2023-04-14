const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const prisma = require('../config/db');
require('dotenv').config();

const jwtSecret = process.env.JWT_SECRET;
console.log(jwtSecret);

router.post('/', async (req, res) => {
  console.log("REQ BODY:", req.body);
  const { employeeId, password, isManager } = req.body;

  // Check if user exists
  const user = await prisma.employee.findUnique({
    where: {
      EmployeeID: employeeId,
    },
    select:{
        EmployeeID: true,
        FirstName: true,
        LastName: true,
        Password: true
    }
  });
    // console.log(user.FirstName);
  if (!user) {
    return res.status(401).json({ error: 'Invlid EmployeeID or password!' });
  }

  //comparing plain text password
  if(user.Password !== password){
    return res.status(401).json({error: 'Invalid password'});
  }

  // Create and sign a JWT token
  const token = jwt.sign({ id: user.EmployeeID, name: user.FirstName }, jwtSecret, {
    expiresIn: '1d'
  });
  
  // Return token to client
  return res.status(200).json({ token });
  
});

module.exports = router;
