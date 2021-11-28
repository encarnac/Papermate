import React from 'react';
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap'

function AddGenres() {
     return (
         <>
        <Container>
            <Card>
                <Card.Header>Create New Genre</Card.Header>
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
                                        <Form.Control type="text" placeholder="community_url" />
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
        </>
     )
}
export default AddGenres;