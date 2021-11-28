import React from 'react';
import TableFrame from '../components/TableFrame';
import { Container, Row, Col, Button, Card, Form, FloatingLabel } from 'react-bootstrap'

function SavedPayments() {
     const savedPaymentsProperties = ['payment_method', 'member_id', 'cc_name', 'cc_num', 'cc_exp', 'cc_cvc'];
     return (
          <>
          {/* ------------- Table Here ----------- */}
          <div class="displayed-table">
               <Container>
                    <h1 class="display-6">Saved Payments</h1>
                    <TableFrame columnNames={savedPaymentsProperties}/>
               </Container>
          </div>


          <div class="input-form-group">
               <Container>
                    <Card>
                         <Card.Header>Create New Genre</Card.Header>
                         <Card.Body>
                              <Card.Text>
                                   <Form>
                                        <FloatingLabel className="mb-3" controlId="floatingSelect" label="genre_id from Genres">
                                             <Form.Select aria-label="Floating label select example">
                                                  <option>SELLECT genre_id FROM Genres</option>
                                                  <option value="1">One</option>
                                                  <option value="2">Two</option>
                                                  <option value="3">Three</option>
                                             </Form.Select>
                                        </FloatingLabel>

                                        <Form.Group as={Row} className="mb-3" controlId="">
                                             <Form.Label column sm={2}>
                                                  cc_name
                                             </Form.Label>
                                             <Col sm={10}>
                                                  <Form.Control type="text" placeholder="cc_name" />
                                             </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} className="mb-3" controlId="">
                                             <Form.Label column sm={2}>
                                                  cc_num
                                             </Form.Label>
                                             <Col sm={10}>
                                                  <Form.Control type="url" placeholder="cc_num" />
                                             </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} className="mb-3" controlId="">
                                             <Form.Label column sm={2}>
                                                  cc_exp
                                             </Form.Label>
                                             <Col sm={10}>
                                                  <Form.Control type="date" placeholder="cc_exp" />
                                             </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} className="mb-3" controlId="">
                                             <Form.Label column sm={2}>
                                                  cc_cvc
                                             </Form.Label>
                                             <Col sm={10}>
                                                  <Form.Control type="number" placeholder="cc_cvc" />
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
export default SavedPayments;