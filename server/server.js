const app = require('./config/app.js');
const port = 5000;

app.listen(port);
console.log(`Server running on port ${port}`);

module.exports = app;