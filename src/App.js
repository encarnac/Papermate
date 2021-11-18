import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MembersPage from './pages/MembersPage';
import TopNavBar from './components/TopNavBar';
import SavedPaymentsPage from './pages/SavedPaymentsPage';
import SubscriptionBillsPage from './pages/SubscriptionBillsPage';
import SubscriptionItemsPage from './pages/SubscriptionItemsPage';
import BooksPage from './pages/BooksPage';
import BookGenresPage from './pages/BookGenresPage';
import GenresPage from './pages/GenresPage';
import ReviewsPage from './pages/ReviewsPage';

function App() {
  return (
    <div className="App">

      <Router>
        <TopNavBar></TopNavBar>
        <div>

          <Route path="/" exact>
            <HomePage></HomePage>
          </Route>

          <Route path="/members" exact>
            <MembersPage></MembersPage>
          </Route>

          <Route path="/saved_payments" exact>
            <SavedPaymentsPage></SavedPaymentsPage>
          </Route>

          <Route path="/subscription_bills" exact>
            <SubscriptionBillsPage></SubscriptionBillsPage>
          </Route>

          <Route path="/subscription_items" exact>
            <SubscriptionItemsPage></SubscriptionItemsPage>
          </Route>

          <Route path="/books" exact>
            <BooksPage></BooksPage>
          </Route>

          <Route path="/book_genres" exact>
            <BookGenresPage></BookGenresPage>
          </Route>

          <Route path="/genres" exact>
            <GenresPage></GenresPage>
          </Route>
          
          <Route path="/reviews" exact>
            <ReviewsPage></ReviewsPage>
          </Route>

        </div>
      </Router>
    </div>
  );
}

export default App;
