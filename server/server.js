const express = require('express');
const db = require('./db')
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
const  PORT = 5983;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json())


// ---- READ : Route to get all rows of a table  ---- 
app.get("/book_genres", (req,res)=>{
    db.pool.query("SELECT * FROM `Book_Genres`", (err,result)=>{
        if(err) {
            console.log(err)
            } 
        res.send(result)
        });   });

app.get("/books", (req,res)=>{
    db.pool.query("SELECT * FROM Books", (err,result)=>{
        if(err) {
            console.log(err)
            } 
        res.send(result)
        });   });

app.get("/genres", (req,res)=>{
db.pool.query("SELECT * FROM Genres", (err,result)=>{
    if(err) {
        console.log(err)
        } 
    res.send(result)
    });   });

app.get("/members", (req,res)=>{
    db.pool.query("SELECT * FROM Members", (err,result)=>{
        if(err) {
            console.log(err)
            } 
        res.send(result)
        });   });

app.get("/reviews", (req,res)=>{
    db.pool.query("SELECT * FROM Reviews", (err,result)=>{
        if(err) {
            console.log(err)
            } 
        res.send(result)
        });   });
    
app.get("/saved_payments", (req,res)=>{
    db.pool.query("SELECT * FROM `Saved_Payments`; SELECT member_id from Members;", [1,2], (err,result)=>{
        if(err) {
            console.log(err)
            } 
        res.send(result)
        console.log(result[0])
        console.log(result[1])
        });
    });
        
app.get("/subscription_bills", (req,res)=>{
    db.pool.query("SELECT * FROM `Subscription_Bills`", (err,result)=>{
        if(err) {
            console.log(err)
            } 
        res.send(result)
        });   });

app.get("/subscription_items", (req,res)=>{
    db.pool.query("SELECT * FROM `Subscription_Items`", (err,result)=>{
        if(err) {
            console.log(err)
            } 
        res.send(result)
        });   });





// ---- CREATE : Route to insert rows into a table  ---- 
app.post('/create_member', (req,res)=> {
    const first_name = req.body.firstName
    const last_name = req.body.lastName
    const email = req.body.email
    const phone_number = req.body.phoneNumber
    const address_line = req.body.addressLine
    const address_line_2 = req.body.addressLine2
    const state = req.body.state
    const city = req.body.city
    const postal_code = req.body.postalCode
    const auto_renew = req.body.autoRenew

    const sqlCreateMember = `INSERT INTO Members (first_name, last_name, email, phone_number, address_line, address_line_2, state, city, postal_code, auto_renew)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    const values = [first_name, last_name, email, phone_number, address_line, address_line_2, state, city, postal_code, auto_renew]

    db.pool.query(sqlCreateMember, values, (err,result)=>{
        if(err) {
        console.log(err)
        } 
        console.log(result)})

    }
);

app.post('/create_book', (req,res)=> {
    const isbn = req.body.isbn
    const title = req.body.title
    const author_first = req.body.authorFirst
    const author_last = req.body.authorLast
    const description = req.body.description
    const date_published = req.body.datePublished
    const release_date = req.body.releaseDate
    const stock = req.body.stock

    const sqlCreateBook = `INSERT INTO Books (isbn, title, author_first, author_last, description, date_published, release_date, stock) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
    const values = [isbn, title, author_first, author_last, description, date_published, release_date, stock]


    db.pool.query(sqlCreateBook, values, (err,result)=>{
        if(err) {
        console.log(err)
        } 
        console.log(result)})
})


app.post('/create_genre', (req,res)=> {
    const genre = req.body.genre
    const community_url = req.body.communityUrl

    const sqlCreateGenre = `INSERT INTO Genres (genre, community_url) VALUES (?, ?)`
    const values = [genre, community_url]


    db.pool.query(sqlCreateGenre, values, (err,result)=>{
        if(err) {
        console.log(err)
        } 
        console.log(result)})
})

app.post('/create_saved_payment', (req, res) => {
    const member_id = req.body.memberId
    const cc_name = req.body.ccName
    const cc_num = req.body.ccNum
    const cc_exp = req.body.ccExp
    const cc_cvc = req.body.ccCVC

    const sqlCreateSavedPayment = `INSERT INTO Saved_Payments (member_id, cc_name, cc_num, cc_exp, cc_cvc) VALUES (?, ?, ?, ?, ?)`
    const values = [member_id, cc_name, cc_num, cc_exp, cc_cvc]

    db.pool.query(sqlCreateSavedPayment, values, (err,result)=>{
        if(err) {
        console.log(err)
        } 
        console.log(result)})
})



// const username = req.body.userName;
// const title = req.body.title;
// const text = req.body.text;

// db.query("INSERT INTO posts (title, post_text, user_name) VALUES (?,?,?)",[title,text,username], (err,result)=>{
//    if(err) {
//    console.log(err)
//    } 
//    console.log(result)
// });   })

// // Route to like a post
// app.post('/api/like/:id',(req,res)=>{

// const id = req.params.id;
// db.query("UPDATE posts SET likes = likes + 1 WHERE id = ?",id, (err,result)=>{
//     if(err) {
//    console.log(err)   } 
//    console.log(result)
//     });    
// });

// // Route to delete a post

// app.delete('/api/delete/:id',(req,res)=>{
// const id = req.params.id;

// db.query("DELETE FROM posts WHERE id= ?", id, (err,result)=>{
// if(err) {
// console.log(err)
//         } }) })

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
});