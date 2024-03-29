import { React, useState, useEffect } from 'react';
import Axios from 'axios';
import TableFrame from '../components/TableFrame';
import SelectOption from '../components/SelectOption';
import { Container, Row, Col, Button, Card, Form, FloatingLabel } from 'react-bootstrap'

function SavedPayments() {
     const savedPaymentsProperties = ['payment_method', 'member_id', 'cc_name', 'cc_num', 'cc_exp', 'cc_cvc'];
     const [listPayments, setPayments] = useState([])
     const [membersFK, setMembersFK] = useState([])

     useEffect(()=>{
          Axios.get("http://flip2.engr.oregonstate.edu:5983/saved_payments").then((result)=>{
          setPayments(result.data[0])
          setMembersFK(result.data[1])
          });
          },[]);
     
     const [memberId, set_memberId] = useState('')
     const [ccName, set_ccName] = useState('')
     const [ccNum, set_ccNum] = useState('')
     const [ccExp, set_ccExp] = useState('')
     const [ccCVC, set_ccCVC] = useState('')
     
     const createSavedPayment = () => {
          Axios.post('http://flip2.engr.oregonstate.edu:5983/create_saved_payment', 
          {memberId:memberId, ccName:ccName, ccNum:ccNum, ccExp:ccExp, ccCVC:ccCVC});
          window.location.reload(false);
          };
     
     const onDelete = (_id) => {
          Axios.delete(`http://flip2.engr.oregonstate.edu:5983/saved_payments/${_id}`)
     }


     return (
          <>
          {/* ------------- Table Here ----------- */}
          <div className="displayed-table">
               <Container>
                    <h1 className="display-6">Saved Payments</h1>
                    <TableFrame keys={savedPaymentsProperties} items={listPayments} onDelete={onDelete} />
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
                                                  <Form.Select defaultValue="" onChange={(e)=> {set_memberId(e.target.value)}}>
                                                       <option value=""></option>
                                                       <SelectOption data={membersFK} />
                                                  </Form.Select>
                                             </FloatingLabel>
                                        </Form.Group>


                                        <Form.Group as={Row} className="mb-3" controlId="">
                                             <Form.Label column sm={2}>
                                                  cc_name
                                             </Form.Label>
                                             <Col sm={10}>
                                                  <Form.Control type="text" placeholder="cc_name" onChange={(e)=> {set_ccName(e.target.value)}} />
                                             </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} className="mb-3" controlId="">
                                             <Form.Label column sm={2}>
                                                  cc_num
                                             </Form.Label>
                                             <Col sm={10}>
                                                  <Form.Control type="url" placeholder="cc_num" onChange={(e)=> {set_ccNum(e.target.value)}} />
                                             </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} className="mb-3" controlId="">
                                             <Form.Label column sm={2}>
                                                  cc_exp
                                             </Form.Label>
                                             <Col sm={10}>
                                                  <Form.Control type="date" placeholder="cc_exp" onChange={(e)=> {set_ccExp(e.target.value)}} />
                                             </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} className="mb-3" controlId="">
                                             <Form.Label column sm={2}>
                                                  cc_cvc
                                             </Form.Label>
                                             <Col sm={10}>
                                                  <Form.Control type="number" placeholder="cc_cvc" onChange={(e)=> {set_ccCVC(e.target.value)}} />
                                             </Col>
                                        </Form.Group>


                                        <Form.Group as={Row} className="mb-3">
                                             <Col sm={{ span: 10 }}>
                                                  <Button variant="secondary" onClick={createSavedPayment} >Add</Button>
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