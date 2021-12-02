import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, CardGroup } from 'react-bootstrap'

function HomePage() {
     return (
          <>
          <div >
          <Container >
               {/* Row for the page title and short description */}
               <Row>
               <h1 className="display-6">Papermate</h1>
               <small className="text-muted">An online book subscription service</small>
               </Row>

               {/* Row of Three Cards for Members, Saved Payments, and Subscription Bills */}
               <Row>
               <CardGroup >
                    <Card >
                         <Card.Header>Members</Card.Header>
                         <Card.Body>
                              <Card.Title as="H6">Properties:</Card.Title>
                              <Card.Text>
                                   <p>member_id, first_name, last_name, email, phone_number, address_line, address_line_2, state, city, postal_code, auto_renew</p>
                              </Card.Text>
                              <Button variant="secondary" size="sm">
                                   <Link className="text-link" to="/members">Manage</Link>
                              </Button>
                         </Card.Body>
                    </Card>
                    <Card>
                         <Card.Header>Saved Payments</Card.Header>
                         <Card.Body>
                              <Card.Title as="H6">Properties:</Card.Title>
                              <Card.Text>
                                   <p>payment_method, member_id, cc_name, cc_num, cc_exp, cc_cvc</p>
                              </Card.Text>
                              <Button variant="secondary" size="sm">
                                   <Link className="text-link" to="/saved_payments">Manage</Link>
                              </Button>
                         </Card.Body>
                    </Card>
                    <Card>
                         <Card.Header>Subscription Bills</Card.Header>
                         <Card.Body>
                              <Card.Title as="H6">Properties:</Card.Title>
                              <Card.Text>
                                   <p>subscription_id, payment_method, member_id, plan_type, order_date, expiration_date, total, order_completed</p>
                              </Card.Text>
                              <Button variant="secondary" size="sm">
                                   <Link className="text-link" to="/subscription_bills">Manage</Link>
                              </Button>
                         </Card.Body>
                    </Card>
               </CardGroup>
               </Row>

               {/* Row of Cards for Books, Book Genres, and Genres */}
               <Row>
               <CardGroup> 
                    <Card>
                         <Card.Header>Books</Card.Header>
                         <Card.Body>
                              <Card.Title as="H6">Properties:</Card.Title>
                              <Card.Text>
                                   <p>isbn, title, author_first, author_last, description, date_published, release_date, avg_rating, stock</p>
                              </Card.Text>
                              <Button variant="secondary" size="sm">
                                   <Link className="text-link" to="/books">Manage</Link>
                              </Button>
                         </Card.Body>
                    </Card>
                    <Card>
                         <Card.Header>Book Genres</Card.Header>
                         <Card.Body>
                              <Card.Title as="H6">Properties:</Card.Title>
                              <Card.Text>
                                   <p>book_genres_id, genre_id, isbn</p>
                              </Card.Text>
                              <Button variant="secondary" size="sm">
                                   <Link className="text-link" to="/book_genres">Manage</Link>
                              </Button>
                         </Card.Body>
                    </Card>
                    <Card>
                         <Card.Header>Genres</Card.Header>
                         <Card.Body>
                              <Card.Title as="H6">Properties:</Card.Title>
                              <Card.Text>
                                   <p>genre_id, genre, community_url</p>
                              </Card.Text>
                              <Button variant="secondary" size="sm">
                                   <Link className="text-link" to="/genres">Manage</Link>
                              </Button>
                         </Card.Body>
                    </Card>
               </CardGroup>     
               </Row>

               {/* Row containing a Card for Reviews */}
               <Row>
                    <Col></Col>
                    <Col>
                    <CardGroup>
                         <Card>
                              <Card.Header>Reviews</Card.Header>
                              <Card.Body>
                                   <Card.Title as="H6">Properties:</Card.Title>
                                   <Card.Text>
                                        <p>review_id, member_id, isbn, date_posted, comment, rating, recommend</p>
                                   </Card.Text>
                                   <Button variant="secondary" size="sm">
                                   <Link className="text-link" to="/reviews">Manage</Link>
                              </Button>
                              </Card.Body>
                         </Card>
                    </CardGroup>
                    </Col>
                    <Col></Col>     
               </Row>
          </Container>
          </div>
          </>
     )
}

export default HomePage;