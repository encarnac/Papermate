const express = require('express');
const db = require('./db')
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
const  PORT = 5983;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json())

// Route to get all genres
app.get("/genres", (req,res)=>{
db.pool.query("SELECT * FROM Genres", (err,result)=>{
    if(err) {
        console.log(err)
        } 
    res.send(result)
    });   });
    
// Route to get all books
app.get("/books", (req,res)=>{
    db.pool.query("SELECT * FROM Books", (err,result)=>{
        if(err) {
            console.log(err)
            } 
        res.send(result)
        });   });
        

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
});