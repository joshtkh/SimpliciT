const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const {PrismaClient} = require('@prisma/client');
const prisma =new PrismaClient();
const config = require('../config/config');

const jwtSecret = config.jwtSecret;
// console.log(jwtSecret);
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post('/', async (req, res) => {
  const { username, password, isManager } = req.body;
  const employeeId = parseInt(username);
  // Check if user exists
  const user = await prisma.employee.findUnique({
    
    where: {
      EmployeeID: employeeId,
    },
    select:{
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
  const token = jwt.sign({ id: user.EmployeeID }, jwtSecret, {
    expiresIn: '1d'
  });
  

  // Return token to client
  res.json({ token });
  
});

module.exports = router;
