require('dotenv').config(); // Enviromental variables
const app = require('./app');
require('./database'); // Database connection

// Starting the server
const port = app.get('port')
console.log(port);

function main() {
    app.listen(port);
    console.log('Server on port', port);
}

main();