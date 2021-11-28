import React from 'react';
import HomeHeader from './HomeHeader';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Nav, Button, ListGroup } from 'react-bootstrap'

function CardContainer() {
     return (
          <>
          <HomeHeader />
          <Container>
               <Row><Col>
                    <Card>
                         <Card.Header>
                              <Nav variant="tabs" defaultActiveKey="#first">
                                   <Nav.Item>
                                        <Nav.Link href="#first">Home</Nav.Link>
                                   </Nav.Item>
                                   <Nav.Item>
                                        <Nav.Link href="/members">Members</Nav.Link>
                                   </Nav.Item>
                                   <Nav.Item>
                                        <Nav.Link href="/saved_payments">Saved Payments</Nav.Link>
                                   </Nav.Item>
                                   <Nav.Item>
                                        <Nav.Link href="/subscription_bills"> Subscription Bills </Nav.Link>
                                   </Nav.Item>
                                   <Nav.Item>
                                        <Nav.Link href="/books">Books</Nav.Link>
                                   </Nav.Item>
                                   <Nav.Item>
                                        <Nav.Link href="/book_genres">Book Genres</Nav.Link>
                                   </Nav.Item>
                                   <Nav.Item>
                                        <Nav.Link href="/genres">Genres</Nav.Link>
                                   </Nav.Item>
                                   <Nav.Item>
                                        <Nav.Link href="/reviews">Reviews</Nav.Link>
                                   </Nav.Item>
                              </Nav>
                         </Card.Header>
                         <Card.Body>
                              <Card.Title>Members</Card.Title>
                              <Card.Text>
                                   <p> Manages: </p>
                                   <p>member_id, first_name, last_name, email, phone_number, address_line, address_line_2, state, city, postal_code, auto_renew</p>
                              </Card.Text>
                              <Button variant="primary">Go somewhere</Button>
                         </Card.Body>
                    </Card>
                    </Col>
               </Row>
          </Container>
          </>
     )
}

export default CardContainer;