import React from 'react';
import { Container, Row, Col, Button, Card, Form, FloatingLabel } from 'react-bootstrap'

function FilterBooks() {
    return(
        <>
        <div class="input-form-group">
                    <Container>
                            <Card className="mb-3">
                                <Card.Header>Filter Books</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <Form>
                                            <Form.Group as={Row} className="mb-3" controlId="">
                                                <Form.Label column sm={2}>
                                                    Sort By:
                                                </Form.Label>
                                                <Col sm={10}>
                                                    <Form.Select className="mb-3">
                                                        <option>Sort By:</option>
                                                        <option value="isbn">isbn</option>
                                                        <option value="title">title</option>
                                                        <option value="author_first">author_first</option>
                                                        <option value="author_last">author_last</option>
                                                        <option value="date_published">date_published</option>
                                                        <option value="release_date">release_date</option>
                                                        <option value="stock">stock</option>
                                                    </Form.Select>
                                                </Col>
                                            </Form.Group>

                                            <Form.Group as={Row} className="mb-3" controlId="">
                                                <Form.Label column sm={2}>
                                                    filter options
                                                </Form.Label>
                                                <FloatingLabel className="col-sm-10 mb-3" controlId="floatingSelect" label="SELECT (sort_by_value) FROM Books">
                                                    <Form.Select>
                                                        <option>dynamic filter options</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </Form.Select>
                                                </FloatingLabel>
                                            </Form.Group>

                                            <Form.Group as={Row} className="mb-3">
                                                <Col sm={{ span: 10 }}>
                                                    <Button variant="secondary" type="submit">Filter</Button>
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

export default FilterBooks;