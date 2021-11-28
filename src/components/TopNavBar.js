import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BiBook } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function TopNavBar() {
    return (
        <>
        <Navbar bg="dark" variant="dark">
                <Container >
                    <Navbar.Brand>
                        <Link class="text-link" to="/"><BiBook />  Papermate</Link>
                    </Navbar.Brand>
                    <Nav className="me-auto nav-bar-items">
                        <Nav.Link><Link class="text-link" to="/members">Members</Link></Nav.Link>
                        <Nav.Link><Link class="text-link" to="/saved_payments">Saved Payments</Link></Nav.Link>
                        <Nav.Link><Link class="text-link" to="/subscription_bills">Subscription Bills</Link></Nav.Link>
                        <Nav.Link><Link class="text-link" to="/subscription_items">Subscription Items</Link></Nav.Link>
                        <Nav.Link><Link class="text-link" to="/books">Books</Link></Nav.Link>
                        <Nav.Link><Link class="text-link" to="/book_genres">Book Genres</Link></Nav.Link>
                        <Nav.Link><Link class="text-link" to="/genres">Genres</Link></Nav.Link>
                        <Nav.Link><Link class="text-link" to="/reviews">Reviews</Link></Nav.Link>
                    </Nav>
                </Container>
        </Navbar>
        </>
    );
}

export default TopNavBar;