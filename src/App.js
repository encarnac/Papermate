import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import TopNavBar from './components/TopNavBar';
import HomePage from './pages/HomePage';
import Members from './pages/Members';
import SavedPayments from './pages/SavedPayments';
import SubscriptionBills from './pages/SubscriptionBills';
import SubscriptionItems from './pages/SubscriptionItems';
import Books from './pages/Books';
import BookGenres from './pages/BookGenres';
import Genres from './pages/Genres';
import Reviews from './pages/Reviews';




function App() {

  
  return (
    <div className="App">
      
      <Router>
        <TopNavBar/>
        <div>

          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/members" exact>
            <Members />
          </Route>

          <Route path="/saved_payments" exact>
            <SavedPayments />
          </Route>

          <Route path="/subscription_bills" exact>
            < SubscriptionBills />
          </Route>

          <Route path="/subscription_items" exact>
            < SubscriptionItems />
          </Route>

          <Route path="/books" exact>
            <Books />
          </Route>

          <Route path="/book_genres" exact>
            <BookGenres />
          </Route>

          <Route path="/genres" exact>
            <Genres />
          </Route>

          <Route path="/reviews" exact>
            <Reviews />
          </Route>

        </div>
      </Router>
    </div>
  );
}

export default App;
