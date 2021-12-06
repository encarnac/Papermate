const express = require('express');
const db = require('./db')
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
const PORT = 5983;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json())


// ---------------------------- READ : Route to get all rows of a table  ---------------------------- 
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
    // Write an extra SQL query to get the primary keys of an external table (separate w/ ';')
    // Depending on how many dynamic dropdowns needed for the page, create a list like below `[1, 2]` 
    // -- in my case I only needed 2 queries in all (I forgot why it starts with 1 and not 0 btw lol)
    db.pool.query("SELECT * FROM `Saved_Payments`; SELECT member_id from Members;", [1,2], (err,result)=>{
        if(err) {
            console.log(err)
            } 
        res.send(result)
        console.log(result[0]) // this is just so I know how to index it when I'm viewing the results from the front-end
        console.log(result[1]) 
        });
    });
        
app.get("/subscription_bills", (req,res)=>{
    db.pool.query("SELECT * FROM `Subscription_Bills`; SELECT payment_method FROM `Saved_Payments`; SELECT member_id FROM `Members`;", [1,2,3], (err,result)=>{
        if(err) {
            console.log(err);
            } 
        res.send(result);
        });   });

app.get("/subscription_items", (req,res)=>{
    db.pool.query("SELECT * FROM `Subscription_Items`; SELECT subscription_id FROM `Subscription_Bills`; SELECT isbn FROM `Books`;", [1,2,3], (err,result)=>{
        if(err) {
            console.log(err);
            } 
        res.send(result);
        });   });





// ---------------------------- CREATE : Routes to insert rows into a table  ---------------------------- 
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

app.post('/create_subscription_bill', (req, res) => {
    const payment_method = req.body.paymentMethodFK;
    const member_id = req.body.memberIdFK;
    const plan_type = req.body.planType;
    const order_date = req.body.orderDate;
    const expiration_date = req.body.expirationDate;
    const total = req.body.total;
    const order_completed = req.body.orderCompleted;

    const sqlCreateSubscriptionBill = 
        `INSERT INTO Subscription_Bills (payment_method, member_id, plan_type, order_date, expiration_date, total, order_completed) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const values = [payment_method, member_id, plan_type, order_date, expiration_date, total, order_completed];

    db.pool.query(sqlCreateSubscriptionBill, values, (err,result)=>{
        if(err) {
        console.log(err);
        } 
        console.log(result)});
});

app.post('/create_subscription_item', (req, res) => {
    const subscription_id = req.body.subscriptionIdFK;
    const isbn = req.body.isbnFK;
    const quantity = req.body.quantity;
    const book_status = req.body.bookStatus;

    const sqlCreateSubscriptionItem = `INSERT INTO Subscription_Items (subscription_id, isbn, quantity, book_status) VALUES (?, ?, ?, ?)`;
    const values = [subscription_id, isbn, quantity, book_status];

    db.pool.query(sqlCreateSubscriptionItem, values, (err,result)=>{
        if(err) {
        console.log(err);
        } 
        console.log(result)});
});

app.post('/create_book_genre', (req, res) => {
    const genre_id = req.body.genreIdFK;
    const isbn = req.body.isbnFK;

    const sqlCreateBookGenre = `INSERT INTO Book_Genres (genre_id, isbn) VALUES (?, ?)`;
    const values = [genre_id, isbn];

    db.pool.query(sqlCreateBookGenre, values, (err,result)=>{
        if(err) {
        console.log(err);
        } 
        console.log(result)});
});

app.post('/create_review', (req, res) => {
    const member_id = req.body.memberIdFK;
    const isbn = req.body.isbnFK;
    const date_posted = req.body.datePosted;
    const comment = req.body.comment;
    const rating = req.body.rating;
    const recommend = req.body.recommend;

    const sqlCreateReview = 
        `INSERT INTO Reviews (member_id, isbn, date_posted, comment, rating, recommend) VALUES (?, ?, ?, ?, ?, ?)`;
    const values = [member_id, isbn, date_posted, comment, rating, recommend];

    db.pool.query(sqlCreateReview, values, (err,result)=>{
        if(err) {
        console.log(err);
        } 
        console.log(result)});
});




// ---------------------------- DELETE : Routes to delete rows into a table  ---------------------------- 

app.delete(`/saved_payments/:_id`, (req, res) =>{
    const key = req.params._id;
    
    const sqlDeletePayment = `DELETE FROM Saved_Payments WHERE payment_method = ?;`

    db.pool.query(sqlDeletePayment, key, (err,result)=>{
        if(err) {
        console.log(err)}
        else {
            console.log('Delete successful')
        }
    })
})

app.delete(`/book_genres/:_id`, (req, res) =>{
    const key = req.params._id;
    
    const sqlDeleteBookGenres = `DELETE FROM Book_Genres WHERE book_genres_id = ?;`

    db.pool.query(sqlDeleteBookGenres, key, (err,result)=>{
        if(err) {
        console.log(err)}
        else {
            console.log('Delete successful')
        }
    })
})

app.delete(`/members/:_id`, (req, res) =>{
    const key = req.params._id;
    
    const sqlDeleteMembers = `DELETE FROM Members WHERE member_id = ?;`

    db.pool.query(sqlDeleteMembers, key, (err,result)=>{
        if(err) {
        console.log(err)}
        else {
            console.log('Delete successful')
        }
    })
})

app.delete(`/delete_books/:_id`, (req, res) =>{
    const key = req.params._id;
    
    const sqlDeleteBook = `DELETE FROM Books WHERE isbn = ?;`

    db.pool.query(sqlDeleteBook, key, (err,result)=>{
        if(err) {
        console.log(err)}
        else {
            console.log('Delete successful')
        }
    })
})

app.delete(`/subscription_bills/:_id`, (req, res) =>{
    const key = req.params._id;
    
    const sqlDeleteSubscriptionBill = `DELETE FROM Subscription_Bills WHERE subscription_id = ?;`

    db.pool.query(sqlDeleteSubscriptionBill, key, (err,result)=>{
        if(err) {
        console.log(err)}
        else {
            console.log('Delete successful')
        }
    })
})

app.delete(`/subscription_items/:_id`, (req, res) =>{
    const key = req.params._id;
    
    const sqlDeleteSubscriptionItem = `DELETE FROM Subscription_Items WHERE subscription_items_id = ?;`

    db.pool.query(sqlDeleteSubscriptionItem, key, (err,result)=>{
        if(err) {
        console.log(err)}
        else {
            console.log('Delete successful')
        }
    })
})

app.delete(`/genres/:_id`, (req, res) =>{
    const key = req.params._id;
    
    const sqlDeleteGenre = `DELETE FROM Genres WHERE genre_id = ?;`

    db.pool.query(sqlDeleteGenre, key, (err,result)=>{
        if(err) {
        console.log(err)}
        else {
            console.log('Delete successful')
        }
    })
})

app.delete(`/reivews/:_id`, (req, res) =>{
    const key = req.params._id;
    
    const sqlDeleteReview = `DELETE FROM Review WHERE review_id = ?;`

    db.pool.query(sqlDeleteReview, key, (err,result)=>{
        if(err) {
        console.log(err)}
        else {
            console.log('Delete successful')
        }
    })
})


// ---------------------------- UPDATE : Routes to update rows into a table  ---------------------------- 
app.put('/update_member', (req,res)=> {
    const member_id = req.body.memberId
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

    const sqlUpdateMember = `UPDATE Members SET first_name=?, last_name=?, email=?, phone_number=?, address_line=?, address_line_2=?, state=?, city=?, postal_code=?, auto_renew=?
    WHERE member_id=?`
    const values = [first_name, last_name, email, phone_number, address_line, address_line_2, state, city, postal_code, auto_renew, member_id]

    db.pool.query(sqlUpdateMember, values, (err,result)=>{
        if(err) {
        console.log(err)
        } 
        console.log(result)})

    }
);


// ---------------------------- FILTER : Route to filter displayed rows in a table  ---------------------------- 
app.get("/search_books", (req,res)=>{
    const column = req.query.category
    const filter = req.query.value
    const sqlFilterBooks = `SELECT * FROM Books WHERE ${column} = '${filter}';`

    db.pool.query(sqlFilterBooks, (err,result)=>{
        if(err) {
            console.log(err)
            } 
        res.send(result)
        });   });

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
});