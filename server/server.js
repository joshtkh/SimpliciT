const app = require('./config/app.js');
const db = require('./config/db.js');
const port = 3000;

app.listen(port,()=>{
console.log(`Listening on http://localhost:${port}`);
});

module.exports = app;