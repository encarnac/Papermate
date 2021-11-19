const express = require('express');
const app = express();
const mysql = require('./dbcon.js');
const PORT = 1096;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// add endpoints corresponding to all other tables
app.post('/create_member', (request, response) => {

    // once this app is connected to db backend,
    // test with first_name only first,
    // then write code for all other attributes 
    const requestBody = request.body;
    const firstName = requestBody.firstName;

    const sqlCreateMember = `INSERT INTO Members (first_name, last_name, email, phone_number, address_line, address_line_2, state, city, postal_code, auto_renew)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const valuesToInsert = [firstName, 'testLN', 'testEmail', 'testPN', 'testAdd1',' testAdd2', 'testState', 'testCity', 'testZip', 1];

    mysql.pool.query(sqlCreateMember, valuesToInsert, (error, result) => {
        console.log(result);
    });
});

// mysql.pool.query(`SELECT * FROM Members`);

app.listen(PORT, () => {
    console.log(`listening on http://localhost: ${PORT}`);
});
