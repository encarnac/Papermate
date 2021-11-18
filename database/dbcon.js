
const mysql = require('mysql');
const pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs340_grahamol',
  password        : '4564',
  database        : 'cs340_grahamol'
});
module.exports.pool = pool;