import React from 'react';
import { Link } from 'react-router-dom';

function TopNavBar() {
    return (
        <>
        <nav>
            <ul class="nav-bar-group">
                <li class="nav-bar-items"><Link class="text-link" to="/members">Members</Link></li>
                <li class="nav-bar-items"><Link class="text-link" to="/saved_payments">Saved Payments</Link></li>
                <li class="nav-bar-items"><Link class="text-link" to="/subscription_bills">Subscription Bills</Link></li>
                <li class="nav-bar-items"><Link class="text-link" to="/subscription_items">Subscription Items</Link></li>
                <li class="nav-bar-items"><Link class="text-link" to="/books">Books</Link></li>
                <li class="nav-bar-items"><Link class="text-link" to="/book_genres">Book Genres</Link></li>
                <li class="nav-bar-items"><Link class="text-link" to="/genres">Genres</Link></li>
                <li class="nav-bar-items"><Link class="text-link" to="/reviews">Reviews</Link></li> 
         
                <li class="nav-bar-items nav-home"><Link class="text-link" to="/">Home</Link></li>            
            </ul>
        </nav>
        </>
    );
}

export default TopNavBar;