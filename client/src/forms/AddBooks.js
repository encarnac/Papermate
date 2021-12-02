import { React, useState } from 'react';
import Axios from 'axios';
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap'

function AddBooks() {
    const [isbn, setIsbn] = useState('')
    const [title, setTitle] = useState('')
    const [authorFirst, setAuthorFirst] = useState('')
    const [authorLast, setAuthorLast] = useState('')
    const [description, setDescription] = useState('')
    const [datePublished, setDatePublished] = useState('')
    const [releaseDate, setReleaseDate] = useState('')
    const [stock, setStock] = useState('')


    const createBook = () => {
        Axios.post('http://flip2.engr.oregonstate.edu:5983/create_book', 
        {isbn:isbn, title: title, authorFirst:authorFirst, authorLast:authorLast, description:description, datePublished:datePublished, releaseDate:releaseDate, stock:stock});
        window.location.reload(false);
        };


    return(
        <>
        <div className="input-form-group">
                    <Container>
                            <Card>
                                <Card.Header>Add New Book</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <Form>
                                                <Form.Group as={Row} className="mb-3" controlId="isbnId">
                                                    <Form.Label column sm={2}>
                                                        isbn
                                                    </Form.Label>
                                                    <Col sm={10}>
                                                        <Form.Control type="text" placeholder="isbn" onChange={(e)=> {setIsbn(e.target.value)}} />
                                                    </Col>
                                                </Form.Group>

                                                <Form.Group as={Row} className="mb-3">
                                                    <Form.Label column sm={2}>
                                                        title
                                                    </Form.Label>
                                                    <Col sm={10}>
                                                        <Form.Control type="text" placeholder="title" onChange={(e)=> {setTitle(e.target.value)}} />
                                                    </Col>
                                                </Form.Group>

                                                <Form.Group as={Row} className="mb-3" controlId="author_firstId">
                                                    <Form.Label column sm={2}>
                                                        author_first
                                                    </Form.Label>
                                                    <Col sm={10}>
                                                        <Form.Control type="text" placeholder="author_first" onChange={(e)=> {setAuthorFirst(e.target.value)}} />
                                                    </Col>
                                                </Form.Group>

                                                
                                                <Form.Group as={Row} className="mb-3" controlId="author_lastId">
                                                    <Form.Label column sm={2}>
                                                        author_last
                                                    </Form.Label>
                                                    <Col sm={10}>
                                                        <Form.Control type="text" placeholder="author_last" onChange={(e)=> {setAuthorLast(e.target.value)}} />
                                                    </Col>
                                                </Form.Group>

                                                <Form.Group as={Row} className="mb-3" controlId="date_publishedId">
                                                    <Form.Label column sm={2}>
                                                        date_published
                                                    </Form.Label>
                                                    <Col sm={10}>
                                                        <Form.Control type="date" onChange={(e)=> {setDatePublished(e.target.value)}} />
                                                    </Col>
                                                </Form.Group>

                                                <Form.Group as={Row} className="mb-3" controlId="release_dateId">
                                                    <Form.Label column sm={2}>
                                                        release_date
                                                    </Form.Label>
                                                    <Col sm={10}>
                                                        <Form.Control type="date" onChange={(e)=> {setReleaseDate(e.target.value)}} />
                                                    </Col>
                                                </Form.Group>

                                                <Form.Group as={Row} className="mb-3" controlId="descriptionId">
                                                    <Form.Label column sm={2}>
                                                        description
                                                    </Form.Label>
                                                    <Col sm={10}>
                                                        <Form.Control
                                                        placeholder="description"
                                                        style={{ height: '100px' }} 
                                                        as="textarea"
                                                        onChange={(e)=> {setDescription(e.target.value)}} />
                                                    </Col>
                                                </Form.Group>

                                                <Form.Group as={Row} className="mb-3" controlId="stockId">
                                                    <Form.Label column sm={2}>
                                                        stock
                                                    </Form.Label>
                                                    <Col sm={10}>
                                                        <Form.Control type="number" placeholder="stock" onChange={(e)=> {setStock(e.target.value)}} />
                                                    </Col>
                                                </Form.Group>

                                                <Form.Group as={Row} className="mb-3">
                                                    <Col sm={{ span: 10 }}>
                                                        <Button variant="secondary" onClick={createBook} >Add</Button>
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

export default AddBooks;