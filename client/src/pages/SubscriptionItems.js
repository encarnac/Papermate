import { React, useState, useEffect } from 'react';
import Axios from 'axios';
import TableFrame from '../components/TableFrame';
import { Container, Row, Col, Button, Card, Form, FloatingLabel } from 'react-bootstrap';
import SelectOption from '../components/SelectOption';

function SubscriptionItems() {
     /* /subscription_items has an extra column for deleting the rows, indicated as the '-' column */
     const subscriptionItemsProperties = ['subscription_items_id', 'subscription_id', 'isbn', 'quantity', 'book_status', '-'];
     const [listSubItems, setSubItems] = useState([])

     useEffect(()=>{
          Axios.get("http://flip2.engr.oregonstate.edu:5983/subscription_items").then((result)=>{
          setSubItems(result.data)
          });
          },[]);

     const [subscriptionIdFK, setSubscriptionIdFK] = useState('');
     const [isbnFK, setIsbnFK] = useState('');
     const [quantity, setQuantity] = useState('');
     const [bookStatus, setBookStatus] = useState('');

     const createSubscriptionItem = () => {
          Axios.post("http://flip2.engr.oregonstate.edu:5983/create_subscription_item", 
          {subscriptionIdFK: subscriptionIdFK, isbnFK: isbnFK, quantity: quantity, bookStatus: bookStatus});
     window.location.reload(false);
     };

     const onDelete = (_id) => {
          Axios.delete(`http://flip2.engr.oregonstate.edu:5983/subscription_items/${_id}`);
     };

     return (
          <>
          {/* ------------- Table Here ----------- */}
          <div className="displayed-table">
               <Container>
                    <h1 className="display-6">Subscription Items</h1>
                    <TableFrame keys={subscriptionItemsProperties} items={listSubItems} onDelete={onDelete} />
               </Container>
          </div>

          {/* ------------- Add Form ----------- */}
          <div className="input-form-group">
               <Container>
                    <Card>
                         <Card.Header>Add New Item to a Subscription</Card.Header>
                         <Card.Body>
                              <Card.Text>
                                   <Form>
                                   <Form.Group as={Row} className="mb-3" controlId="">
                                             <Form.Label column sm={2}>
                                                  subscription_id
                                             </Form.Label>
                                             <FloatingLabel className="col-sm-10 mb-3" controlId="floatingSelect" label="subscription_id from Subscription_Bills">
                                                  <Form.Select defaultValue="" onChange={(e)=> {setSubscriptionIdFK(e.target.value)}}>
                                                       <option value=""></option>
                                                       <SelectOption data={subscriptionIdFK} />
                                                  </Form.Select>
                                             </FloatingLabel>
                                        </Form.Group>

                                        <Form.Group as={Row} className="mb-3" controlId="">
                                             <Form.Label column sm={2}>
                                                  isbn
                                             </Form.Label>
                                             <FloatingLabel className="col-sm-10 mb-3" controlId="floatingSelect" label="isbn from Books">
                                                  <Form.Select defaultValue="" onChange={(e)=> {setIsbnFK(e.target.value)}}>
                                                       <option value=""></option>
                                                       <SelectOption data={isbnFK} />
                                                  </Form.Select>
                                             </FloatingLabel>
                                        </Form.Group>

                                        <Form.Group as={Row} className="mb-3" controlId="">
                                             <Form.Label column sm={2}>
                                                  quantity
                                             </Form.Label>
                                             <Col sm={10}>
                                                  <Form.Control type="number" placeholder="quantity" onChange={(e)=> {setQuantity(e.target.value)}}/>
                                             </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} className="mb-3" controlId="">
                                             <Form.Label column sm={2}>
                                                  book_status
                                             </Form.Label>
                                             <Col sm={10}>
                                                  <Form.Select className="mb-3" onChange={(e)=> {setBookStatus(e.target.value)}}>
                                                       <option>book_status</option>
                                                       <option value="0">Processing</option>
                                                       <option value="1">Shipped</option>
                                                       <option value="2">Delivered</option>
                                                       <option value="3">Returned</option>

                                                  </Form.Select>
                                             </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} className="mb-3">
                                             <Col sm={{ span: 10 }}>
                                                  <Button variant="secondary" type="submit" onClick={createSubscriptionItem}>Add</Button>
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
export default SubscriptionItems;