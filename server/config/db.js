const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// IIFE to connect to the database with prisma
(async () => {
    await prisma.$connect()
    .then(() => {
        console.log("Successfully connected to the database.");
    })
    .catch((err) => {
        console.log("ERROR CONNECTING TO DATABASE: ", err);
    });
})();

// Now export the prisma client for use elsewhere in the application.
module.exports = prisma;