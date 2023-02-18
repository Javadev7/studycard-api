const initOptions = {};

const pgp = require('pg-promise')( initOptions );

// Preparing the connection details:
const cn = {
    user: "postgres"/* process.env.DB_USER */,
    password: "Java0707"/* process.env.DB_PASSWORD */,
    host: "localhost",  
    port: 5432,
    database: "studycard",
} 
// Creating a new database instance from the connection details:
const db = pgp(cn);

// Exporting the database object for shared use:
module.exports = db;