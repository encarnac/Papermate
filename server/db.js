// Get an instance of mysql we can use in the app
const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'classmysql.engr.oregonstate.edu',
    user            : 'cs340_?',
    password        : '?'
    database        : 'cs340_?',
    multipleStatements : true
});

// Export it for use in our application
module.exports.pool = pool;

