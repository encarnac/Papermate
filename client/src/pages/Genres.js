import { React, useState, useEffect } from 'react';
import Axios from 'axios';
import TableFrame from '../components/TableFrame';
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap'

function Genres() {
     const genresProperties = ['genre_id', 'genre', 'community_url']; 
     const [listGenres, setGenres] = useState([]) 
     
     const [userName,setUserName] = useState("");
     const [title,setTitle] = useState("");
     const [text,setText] = useState("");

     const [genre, setGenre] = useState("")
     const [communityUrl, setCommunityUrl] = useState("")

     useEffect(()=>{
          Axios.get("http://flip2.engr.oregonstate.edu:5983/genres").then((result)=>{
          setGenres(result.data)
          });
          },[])

     
     const createGenre = () => {
          Axios.post('http://flip2.engr.oregonstate.edu:5983/create_genre', 
          {genre:genre, communityUrl:communityUrl});
          window.location.reload(false);
          };


     return (
          <>
          {/* ------------- Table Here ----------- */}
          <div className="displayed-table">
               <Container>
                    <h1 className="display-6">Genres</h1>
                    <TableFrame keys={genresProperties} items={listGenres} />
               </Container>
          </div>

          {/* ------------- Add Form ----------- */}
          <div className="input-form-group">
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
                                                  <Form.Control type="text" placeholder="genre" onChange={(e)=> {setGenre(e.target.value)}} />
                                             </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} className="mb-3" controlId="formCommunityURL">
                                             <Form.Label column sm={2}>
                                                  community_url
                                             </Form.Label>
                                             <Col sm={10}>
                                                  <Form.Control type="url" placeholder="community_url" onChange={(e)=> {setCommunityUrl(e.target.value)}} />
                                             </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} className="mb-3">
                                             <Col sm={{ span: 10 }}>
                                                  <Button variant="secondary" onClick={createGenre}>Add</Button>
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