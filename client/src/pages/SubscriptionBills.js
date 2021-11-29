import { React, useState, useEffect } from 'react';
import Axios from 'axios';
import TableFrame from '../components/TableFrame';
import { Container, Row, Col, Button, Card, Form, FloatingLabel } from 'react-bootstrap'

function SubscriptionBills() {
     const subscriptionBillsProperties = ['subscription_id', 'payment_method', 'member_id', 'plan_type', 'order_date', 'expiration_date', 'total', 'order_completed'];
     const [listSubBills, setSubBills] = useState([])
     
     useEffect(()=>{
          Axios.get("http://flip2.engr.oregonstate.edu:5983/subscription_bills").then((result)=>{
          setSubBills(result.data)
          });
          },[])
     
     
     return (
          <>
          {/* ------------- Table Here ----------- */}
          <div className="displayed-table">
               <Container>
                    <h1 className="display-6">Subscription Bills</h1>
                    <TableFrame keys={subscriptionBillsProperties} items={listSubBills} />
               </Container>
          </div>

          {/* ------------- Add Form ----------- */}
          <div className="input-form-group">
               <Container>
                    <Card>
                         <Card.Header>Add New Subscription Bill</Card.Header>
                         <Card.Body>
                              <Card.Text>
                                   <Form>
                                   <Form.Group as={Row} className="mb-3" controlId="">
                                             <Form.Label column sm={2}>
                                                  payment_method
                                             </Form.Label>
                                             <FloatingLabel className="col-sm-10 mb-3" controlId="floatingSelect" label="payment_method from Saved_Payments">
                                                  <Form.Select>
                                                       <option>payment_method</option>
                                                       <option value="1">One</option>
                                                       <option value="2">Two</option>
                                                       <option value="3">Three</option>
                                                  </Form.Select>
                                             </FloatingLabel>
                                        </Form.Group>

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
                                                  plan_type
                                             </Form.Label>
                                             <Col sm={10}>
                                                  <Form.Select className="mb-3">
                                                       <option>plan_type</option>
                                                       <option value="1">Tier 1</option>
                                                       <option value="2">Tier 2</option>
                                                       <option value="3">Tier 3</option>
                                                       <option value="4">Tier 4</option>
                                                       <option value="5">Cancelled</option>

                                                  </Form.Select>
                                             </Col>
                                        </Form.Group>


                                        <Form.Group as={Row} className="mb-3" controlId="">
                                             <Form.Label column sm={2}>
                                                  order_date
                                             </Form.Label>
                                             <Col sm={10}>
                                                  <Form.Control type="date"/>
                                             </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} className="mb-3" controlId="">
                                             <Form.Label column sm={2}>
                                                  expiration_date
                                             </Form.Label>
                                             <Col sm={10}>
                                                  <Form.Control type="date" />
                                             </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} className="mb-3" controlId="">
                                             <Form.Label column sm={2}>
                                                  total
                                             </Form.Label>
                                             <Col sm={10}>
                                                  <Form.Control type="number" placeholder="total" />
                                             </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} className="mb-3" controlId="">
                                             <Form.Label column sm={2}>
                                                  order_completed
                                             </Form.Label>
                                             <Col sm={10}>
                                                  <Form.Select className="mb-3">
                                                       <option>order_completed</option>
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
export default SubscriptionBills;