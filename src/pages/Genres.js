import { React, useState, useEffect } from 'react';
import TableFrame from '../components/TableFrame';
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap'

function Genres() {
     const genresProperties = ['genre_id', 'genre', 'community_url'];
     const [listGenres, setGenres] = useState([])

     const loadGenres = async function () {
          const response = await fetch('/genres');
          const genreData = await response.json();
          setGenres(genreData);
     }

     useEffect(() => {
          loadGenres();},
          []);

     return (
          <>
          {/* ------------- Table Here ----------- */}
          <div class="displayed-table">
               <Container>
                    <h1 class="display-6">Genres</h1>
                    <TableFrame columnNames={genresProperties}/>
               </Container>
          </div>

          {/* ------------- Add Form ----------- */}
          <div class="input-form-group">
               <Container>
                    <Card>
                         <Card.Header>Add New Genre</Card.Header>
                         <Card.Body>
                              <Card.Text>
                                   <Form>
                                        <Form.Group as={Row} className="mb-3" controlId="formGenre">
                                             <Form.Label column sm={2}>
                                                  genre
                                             </Form.Label>
                                             <Col sm={10}>
                                                  <Form.Control type="text" placeholder="genre" />
                                             </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} className="mb-3" controlId="formCommunityURL">
                                             <Form.Label column sm={2}>
                                                  community_url
                                             </Form.Label>
                                             <Col sm={10}>
                                                  <Form.Control type="url" placeholder="community_url" />
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

          {/* ------------- Add Data Here ----------- */}

          </>
     )
}
export default Genres;