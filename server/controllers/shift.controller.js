const prisma = require("../config/db");

// CREATE Shift
const createShift = async function(req, res, next) {
    // Grab the parameters from req
    const { date, startTime, endTime, employeeId } = req.body;
    console.log("req.body data: ", req.body);
    const newShift = await prisma.shift.create({
        data: {
            Date: date,
            Start: startTime,
            End: endTime,
            Employee: {
                connect: {
                    id: employeeId
                }
            }
        },
        include: {
            Employee: true
        }
    });
    console.log("New Shift created: ", newShift);
    return res.status(200).json(newShift);
}

module.exports = {
    createShift
}