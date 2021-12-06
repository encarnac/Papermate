import { React, useState, useEffect } from 'react';
import Axios from 'axios';
import TableFrame from '../components/TableFrame';
import { Container, Row, Col, Button, Card, Form, FloatingLabel } from 'react-bootstrap';
import SelectOption from '../components/SelectOption';

function Reviews() {
     const reviewsProperties = ['review_id', 'member_id', 'isbn', 'date_posted', 'comment', 'rating', 'recommend'];
     const [listReviews, setReviews] = useState([])

     useEffect(()=>{
          Axios.get("http://flip2.engr.oregonstate.edu:5983/reviews").then((result)=>{
          setReviews(result.data)
          });
          },[])
     
     const [memberIdFK, setMemberIdFK] = useState('');
     const [isbnFK, setIsbnFK] = useState('');
     const [datePosted, setDatePosted] = useState('');
     const [comment, setComment] = useState('');
     const [rating, setRating] = useState('');
     const [recommend, setRecommend] = useState('');

     const createReview = () => {
          Axios.post("http://flip2.engr.oregonstate.edu:5983/create_review", 
          {memberIdFK: memberIdFK, isbnFK: isbnFK, datePosted: datePosted, comment: comment, rating: rating, recommend: recommend});
          window.location.reload(false);
     }

     const onDelete = (_id) => {
          Axios.delete(`http://flip2.engr.oregonstate.edu:5983/reviews/${_id}`);
     }
     
     return (
          <>
          {/* ------------- Table Here ----------- */}
          <div className="displayed-table">
               <Container>
                    <h1 className="display-6">Reviews</h1>
                    <TableFrame keys={reviewsProperties} items={listReviews} onDelete={onDelete} />
               </Container>
          </div>

          {/* ------------- Add Form ----------- */}
          <div className="input-form-group">
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
                                                  <Form.Select defaultValue="member_id" onChange={(e)=> {setMemberIdFK(e.target.value)}}>
                                                       <option value=""></option>
                                                       <SelectOption data={memberIdFK} />
                                                  </Form.Select>
                                             </FloatingLabel>
                                        </Form.Group>

                                        <Form.Group as={Row} className="mb-3" controlId="">
                                             <Form.Label column sm={2}>
                                                  isbn
                                             </Form.Label>
                                             <FloatingLabel className="col-sm-10 mb-3" controlId="floatingSelect" label="isbn from Books">
                                                  <Form.Select defaultValue="isbn" onChange={(e)=> {setIsbnFK(e.target.value)}}>
                                                       <option value=""></option>
                                                       <SelectOption data={memberIdFK} />
                                                  </Form.Select>
                                             </FloatingLabel>
                                        </Form.Group>

                                        <Form.Group as={Row} className="mb-3" controlId="">
                                             <Form.Label column sm={2}>
                                                  date_posted
                                             </Form.Label>
                                             <Col sm={10}>
                                                  <Form.Control type="date" onChange={(e)=> {setDatePosted(e.target.value)}}/>
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
                                                  as="textarea"
                                                  onChange={(e)=> {setComment(e.target.value)}}/>
                                             </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} className="mb-3" controlId="">
                                             <Form.Label column sm={2}>
                                                  rating
                                             </Form.Label>
                                             <Col sm={10}>
                                                  <Form.Select className="mb-3" defaultValue="rating" onChange={(e)=> {setRating(e.target.value)}}>
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
                                                  <Form.Select className="mb-3" defaultValue="" onChange={(e)=> {setRecommend(e.target.value)}}>
                                                       <option>recommend</option>
                                                       <option value="0">False</option>
                                                       <option value="1">True</option>
                                                  </Form.Select>
                                             </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} className="mb-3">
                                             <Col sm={{ span: 10 }}>
                                                  <Button variant="secondary" type="submit" onClick={createReview}>Add</Button>
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