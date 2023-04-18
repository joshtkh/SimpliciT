const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const loginRoutes = require('../routes/login.routes');
const employeeRoutes = require('../routes/employee.routes');
const shiftRoutes = require('../routes/shift.routes');

const app = express();
require('dotenv').config();

//console.log(process.env.JWT_SECRET);

//Serve frontend files from backend
app.use(express.static(path.join(__dirname, '..', '..','client', 'build')));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','..','client','build','index.html'))
})

// Use the 'body-parser' middleware functions
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser());


// Set up logging middleware for debugging help
app.use(morgan('dev'));

// setup CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

// Routing needs to be the very last thing loaded.
app.use('/api/login', loginRoutes);
app.use('/api/employee', employeeRoutes);
app.use('/api/shift', shiftRoutes);

// Export the app
module.exports = app;