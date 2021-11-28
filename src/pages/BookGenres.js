import React from 'react';
import TableFrame from '../components/TableFrame';
import { Container, Form, Col, Row, Button, Card, FloatingLabel } from 'react-bootstrap'

function BookGenres() {
     const bookGenresProperties = ['book_genres_id', 'genre_id', 'isbn'];
     return (
          <>
          {/* ------------- Table Here ----------- */}
          <div class="displayed-table">
               <Container>
                    <h1 className="display-6">Book Genres</h1>
                    <TableFrame columnNames={bookGenresProperties}/>
               </Container>
          </div>


          <div class="container justify-content-md-center">
               <Container>
                    <Card>
                         <Card.Header>Add Genres to a Book</Card.Header>
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

                                        <FloatingLabel className="mb-3" controlId="floatingSelect" label="isbn from Books">
                                             <Form.Select aria-label="Floating label select example">
                                                  <option>SELLECT isbn FROM Books</option>
                                                  <option value="1">One</option>
                                                  <option value="2">Two</option>
                                                  <option value="3">Three</option>
                                             </Form.Select>
                                        </FloatingLabel>

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
export default BookGenres;