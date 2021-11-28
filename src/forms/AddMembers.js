import React from 'react';
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap'


function AddMembers (){
    return(
        <>
        <div class="input-form-group">
               <Container >
                    <Card>
                         <Card.Header>Add New Member</Card.Header>
                         <Card.Body >
                              <Card.Text>
                                   <Form>
                                        <Row className="mb-3">
                                             <Form.Group as={Col} >
                                                  <Form.Label class="align-left">first_name</Form.Label>
                                                  <Form.Control type="text" placeholder="first_name" />
                                             </Form.Group>

                                             <Form.Group as={Col} >
                                                  <Form.Label>last_name</Form.Label>
                                                  <Form.Control type="text" placeholder="last_name" />
                                             </Form.Group>
                                        </Row>
                                        <Row className="mb-3">
                                             <Form.Group as={Col} >
                                                  <Form.Label>email</Form.Label>
                                                  <Form.Control type="email" placeholder="email" />
                                             </Form.Group>
                                        </Row>

                                        <Row className="mb-3">
                                             <Form.Group as={Col} >
                                                  <Form.Label>phone_number</Form.Label>
                                                  <Form.Control type="tel" placeholder="phone_number" />
                                             </Form.Group>
                                        </Row>

                                        <Row className="mb-3">
                                             <Form.Group >
                                                  <Form.Label>address_line</Form.Label>
                                                  <Form.Control  type="text"placeholder="1234 Main St" />
                                             </Form.Group>

                                             <Form.Group >
                                                  <Form.Label>address_line_2</Form.Label>
                                                  <Form.Control type="text" placeholder="Apartment, studio, or floor" />
                                             </Form.Group>
                                        </Row>

                                        <Row className="mb-3">
                                             <Form.Group as={Col} >
                                                  <Form.Label>city</Form.Label>
                                                  <Form.Control type="text" placeholder="city"/>
                                             </Form.Group>

                                             <Form.Group as={Col}>
                                                  <Form.Label>state</Form.Label>
                                                  <Form.Select defaultValue="Choose State">
                                                  <option value="">Choose State</option>
                                                  <option value="AL">AL</option>
                                                  <option value="AK">AK</option>
                                                  <option value="AR">AR</option>	
                                                  <option value="AZ">AZ</option>
                                                  <option value="CA">CA</option>
                                                  <option value="CO">CO</option>
                                                  <option value="CT">CT</option>
                                                  <option value="DC">DC</option>
                                                  <option value="DE">DE</option>
                                                  <option value="FL">FL</option>
                                                  <option value="GA">GA</option>
                                                  <option value="HI">HI</option>
                                                  <option value="IA">IA</option>	
                                                  <option value="ID">ID</option>
                                                  <option value="IL">IL</option>
                                                  <option value="IN">IN</option>
                                                  <option value="KS">KS</option>
                                                  <option value="KY">KY</option>
                                                  <option value="LA">LA</option>
                                                  <option value="MA">MA</option>
                                                  <option value="MD">MD</option>
                                                  <option value="ME">ME</option>
                                                  <option value="MI">MI</option>
                                                  <option value="MN">MN</option>
                                                  <option value="MO">MO</option>	
                                                  <option value="MS">MS</option>
                                                  <option value="MT">MT</option>
                                                  <option value="NC">NC</option>	
                                                  <option value="NE">NE</option>
                                                  <option value="NH">NH</option>
                                                  <option value="NJ">NJ</option>
                                                  <option value="NM">NM</option>			
                                                  <option value="NV">NV</option>
                                                  <option value="NY">NY</option>
                                                  <option value="ND">ND</option>
                                                  <option value="OH">OH</option>
                                                  <option value="OK">OK</option>
                                                  <option value="OR">OR</option>
                                                  <option value="PA">PA</option>
                                                  <option value="RI">RI</option>
                                                  <option value="SC">SC</option>
                                                  <option value="SD">SD</option>
                                                  <option value="TN">TN</option>
                                                  <option value="TX">TX</option>
                                                  <option value="UT">UT</option>
                                                  <option value="VT">VT</option>
                                                  <option value="VA">VA</option>
                                                  <option value="WA">WA</option>
                                                  <option value="WI">WI</option>	
                                                  <option value="WV">WV</option>
                                                  <option value="WY">WY</option>
                                                  </Form.Select>
                                             </Form.Group>

                                             <Form.Group as={Col} >
                                                  <Form.Label>postal_code</Form.Label>
                                                  <Form.Control type="text" placeholder="postal_code" />
                                             </Form.Group>
                                        </Row>

                                        <Button variant="primary" type="submit">
                                             Add
                                        </Button>
                                   </Form>
                              </Card.Text>
                         </Card.Body>
                    </Card>
               </Container>
          </div>
        </>
    )
}

export default AddMembers;