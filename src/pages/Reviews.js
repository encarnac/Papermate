import React from 'react';
import { Link } from 'react-router-dom';
import TableFrame from '../components/TableFrame';
import { Container, Row, Col, Button, Card, Form, FloatingLabel } from 'react-bootstrap'

function Reviews() {
     const reviewsProperties = ['review_id', 'member_id', 'isbn', 'date_posted', 'comment', 'rating', 'recommend'];
     return (
          <>
          {/* ------------- Table Here ----------- */}
          <div class="displayed-table">
               <Container>
                    <h1 class="display-6">Reviews</h1>
                    <TableFrame columnNames={reviewsProperties}/>
               </Container>
          </div>

          {/* ------------- Add Form ----------- */}
          <div class="input-form-group">
                         <Container>
                              <Card>
                                   <Card.Header>Add New Review</Card.Header>
                                   <Card.Body>
                                        <Card.Text>
                                             <Form>
                                             <Form.Group as={Row} className="mb-3" controlId="">
                                                       <Form.Label column sm={2}>
                                                            member_id
                                                       </Form.Label>
                                                       <FloatingLabel className="col-sm-10 mb-3" controlId="floatingSelect" label="member_id from Members">
                                                            <Form.Select>
                                                                 <option>member_id</option>
                                                                 <option value="1">One</option>
                                                                 <option value="2">Two</option>
                                                                 <option value="3">Three</option>
                                                            </Form.Select>
                                                       </FloatingLabel>
                                                  </Form.Group>

                                                  <Form.Group as={Row} className="mb-3" controlId="">
                                                       <Form.Label column sm={2}>
                                                            isbn
                                                       </Form.Label>
                                                       <FloatingLabel className="col-sm-10 mb-3" controlId="floatingSelect" label="isbn from Books">
                                                            <Form.Select>
                                                                 <option>isbn</option>
                                                                 <option value="1">One</option>
                                                                 <option value="2">Two</option>
                                                                 <option value="3">Three</option>
                                                            </Form.Select>
                                                       </FloatingLabel>
                                                  </Form.Group>

                                                  <Form.Group as={Row} className="mb-3" controlId="">
                                                       <Form.Label column sm={2}>
                                                            date_posted
                                                       </Form.Label>
                                                       <Col sm={10}>
                                                            <Form.Control type="date"/>
                                                       </Col>
                                                  </Form.Group>

                                                  <Form.Group as={Row} className="mb-3" controlId="">
                                                       <Form.Label column sm={2}>
                                                            comment
                                                       </Form.Label>
                                                       <Col sm={10}>
                                                            <Form.Control
                                                            placeholder="comment"
                                                            style={{ height: '100px' }} 
                                                            as="textarea"/>
                                                       </Col>
                                                  </Form.Group>

                                                  <Form.Group as={Row} className="mb-3" controlId="">
                                                       <Form.Label column sm={2}>
                                                            rating
                                                       </Form.Label>
                                                       <Col sm={10}>
                                                            <Form.Select className="mb-3">
                                                                 <option>rating</option>
                                                                 <option value="1">1 star</option>
                                                                 <option value="2">2 stars</option>
                                                                 <option value="3">3 stars</option>
                                                                 <option value="4">4 stars</option>
                                                                 <option value="5">5 stars</option>

                                                            </Form.Select>
                                                       </Col>
                                                  </Form.Group>

                                                  <Form.Group as={Row} className="mb-3" controlId="">
                                                       <Form.Label column sm={2}>
                                                            recommend
                                                       </Form.Label>
                                                       <Col sm={10}>
                                                            <Form.Select className="mb-3">
                                                                 <option>recommend</option>
                                                                 <option value="0">False</option>
                                                                 <option value="1">True</option>
                                                            </Form.Select>
                                                       </Col>
                                                  </Form.Group>

                                                  <Form.Group as={Row} className="mb-3">
                                                       <Col sm={{ span: 10 }}>
                                                            <Button variant="secondary" type="submit">Add</Button>
                                                       </Col>
                                                  </Form.Group>
                                             </Form>
                                        </Card.Text>
                                   </Card.Body>
                              </Card>
                         </Container>
                    </div>

          </>
     )
}

export default Reviews;