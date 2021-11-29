import { React, useState, useEffect } from 'react';
import Axios from 'axios';
import TableFrame from '../components/TableFrame';
import { Container, Row, Col, Button, Card, Form, FloatingLabel } from 'react-bootstrap'

function SavedPayments() {
     const savedPaymentsProperties = ['payment_method', 'member_id', 'cc_name', 'cc_num', 'cc_exp', 'cc_cvc'];
     const [listPayments, setPayments] = useState([])

     useEffect(()=>{
          Axios.get("http://flip2.engr.oregonstate.edu:5983/saved_payments").then((result)=>{
          setPayments(result.data)
          });
          },[])
     
     return (
          <>
          {/* ------------- Table Here ----------- */}
          <div className="displayed-table">
               <Container>
                    <h1 className="display-6">Saved Payments</h1>
                    <TableFrame keys={savedPaymentsProperties} items={listPayments} />
               </Container>
          </div>

          {/* ------------- Add Form ----------- */}
          <div className="input-form-group">
               <Container>
                    <Card>
                         <Card.Header>Add New Saved Payment</Card.Header>
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