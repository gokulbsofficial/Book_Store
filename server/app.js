const EXPRESS = require('express');

const CONFIG = require('./config/config');

let env = 'development';

const { ENV_STATE, SERVER_ENV,SERVER_PORT } = CONFIG.SERVER;

const APP = EXPRESS();

require('./config/database.config')(CONFIG[env]);
require('./config/express')(APP);
require('./config/routes')(APP);

// Client Routes
APP.use("/", EXPRESS.static(__dirname + "/dist"));

APP.use("*", EXPRESS.static(__dirname + "/dist"));

APP.listen(SERVER_PORT);
console.log(`Server is listening on port ${SERVER_PORT} in ${SERVER_ENV} mode & ENV_STATE is ${ENV_STATE ? "ACTIVE" : "INACTIVE"}`);
