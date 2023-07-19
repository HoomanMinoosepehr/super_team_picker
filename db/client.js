// set the environment
const environment = process.env.NODE_ENV || 'development';
const knex = require('knex');

// grab the correct environment configuration from the knexfile
const environmentConfig = require('../knexfile')[environment];
// create a connection to the database
const connection = knex(environmentConfig);
// export the connection
module.exports = connection;
