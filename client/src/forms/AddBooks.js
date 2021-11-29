import React from 'react';
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap'

function AddBooks() {
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
                                                        <Form.Control type="text" placeholder="isbn" />
                                                    </Col>
                                                </Form.Group>

                                                <Form.Group as={Row} className="mb-3" controlId="author_firstId">
                                                    <Form.Label column sm={2}>
                                                        author_first
                                                    </Form.Label>
                                                    <Col sm={10}>
                                                        <Form.Control type="text" placeholder="author_first" />
                                                    </Col>
                                                </Form.Group>

                                                
                                                <Form.Group as={Row} className="mb-3" controlId="author_lastId">
                                                    <Form.Label column sm={2}>
                                                        author_last
                                                    </Form.Label>
                                                    <Col sm={10}>
                                                        <Form.Control type="text" placeholder="author_last" />
                                                    </Col>
                                                </Form.Group>

                                                <Form.Group as={Row} className="mb-3" controlId="release_dateId">
                                                    <Form.Label column sm={2}>
                                                        release_date
                                                    </Form.Label>
                                                    <Col sm={10}>
                                                        <Form.Control type="date"/>
                                                    </Col>
                                                </Form.Group>

                                                <Form.Group as={Row} className="mb-3" controlId="date_publishedId">
                                                    <Form.Label column sm={2}>
                                                        date_published
                                                    </Form.Label>
                                                    <Col sm={10}>
                                                        <Form.Control type="date"/>
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
                                                        as="textarea"/>
                                                    </Col>
                                                </Form.Group>

                                                <Form.Group as={Row} className="mb-3" controlId="stockId">
                                                    <Form.Label column sm={2}>
                                                        stock
                                                    </Form.Label>
                                                    <Col sm={10}>
                                                        <Form.Control type="number" placeholder="stock" />
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

export default AddBooks;