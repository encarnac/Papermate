const express = require('express');
const app = express();
const mysql = require('./dbcon.js');

// Configure Express to handle JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post('/create_member', (request, response) => {

    // request.body...
    const requestBody = request.body;
    const firstName = requestBody.firstName;

    const sqlCreateMember = `INSERT INTO Members (first_name, last_name, email, phone_number, address_line, address_line_2, state, city, postal_code, auto_renew)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const valuesToInsert = [firstName, 'testLN', 'testEmail', 'testPN', 'testAdd1',' testAdd2', 'testState', 'testCity', 'testZip', 1];

    mysql.pool.query(sqlCreateMember, valuesToInsert, (error, result) => {
        console.log(result);
    });
});

mysql.pool.query(`SELECT * FROM Members`);

