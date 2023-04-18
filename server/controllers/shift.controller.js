const prisma = require("../config/db");

// CREATE Shift
const createShift = async function(req, res, next) {
    // Grab the parameters from req
    const { employeeId, date, shiftStartTime, shiftEndTime  } = req.body;
    console.log("req.body data: ", req.body);
    
    console.log("employeeId: ", employeeId);
    console.log("date: ", date);
    console.log("shiftStartTime: ", shiftStartTime);
    console.log("shiftEndTime: ", shiftEndTime);

    const [year, month, day]=date.split("-");
    try {
        const newShift = await prisma.shift.create({
            data: {
                Date: new Date(year, month - 1, day),
                Start: new Date(year, month - 1, day, shiftStartTime.split(":")[0], shiftStartTime.split(":")[1]),
                End: new Date(year, month - 1, day, shiftEndTime.split(":")[0], shiftEndTime.split(":")[1]),
                
                Employee: {
                    connect: {
                        EmployeeID: employeeId
                    }
                }
            },
            include: {
                Employee: true
            }
        });
        console.log("New Shift created: ", newShift);
        return res.status(200).json(newShift);
    } catch (err) {
        console.log("createShift Error:", err);
        return res.status(500);
    }
}

// READ shift
const getShift = function(req, res) {
    // shift is stored in req.shift from the middleware function getShiftFromID.
    return res.status(200).json(req.shift);
}
const getShiftEmp = function(req,res){
    return res.status(200).json(req.hours);
}

// DELETE shift
const deleteShift = function(req, res) {
    const shiftToDelete = req.shift;
    // process deletion
    try {
        const deletedShift = prisma.shift.delete({
            where: {
                ShiftID: shiftToDelete.ShiftID
            }
        })
        return res.status(200).json(deleteShift);
    } catch (err) {
        console.log("deleteShift Error: ", err);
    }
}

// Parameter Middleware
// This function fetches the id from the route
// and stores the id in req.shift
const getShiftFromId = async function(req, res, next, id) {
    try {
        const shift = await prisma.shift.findUnique({
            where: {
                ShiftID: id
            }
        });
        req.shift = shift;
        return next();
    } catch (err) {
        // Not found
        console.log("Shift not found.");
        console.log("getShiftFromId Middleware Error: ", err);
        return res.status(404);
    }
}

const getShiftFromEmployeeId = async function(req, res, next, empId){
    try{
        const employeeId = parseInt(empId);
        const hours = await prisma.shift.findMany({
            where: {
                EmployeeID: employeeId
            }
        });
        req.hours = hours;
        console.log(req.hours);
        return next();
    } catch (err) {
        console.log(err);
        return res.status(404);
    }
}

module.exports = {
    createShift,
    getShift,
    getShiftEmp,
    deleteShift,
    getShiftFromId,
    getShiftFromEmployeeId
}