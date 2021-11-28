import React from 'react';
import { useState } from 'react';
import TableFrame from '../components/TableFrame';
import AddMembers from '../forms/AddMembers';
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap'

function Members() {
     const membersProperties = ['member_id', 'first_name', 'last_name', 'email', 'phone_number', 'address_line', 'address_line_2', 'state', 'city', 'postal_code', 'auto_renew'];
     
     const [formState, setFormState] = useState([])
     
     return (
          <>
          {/* ------------- Table Here ----------- */}
          <div class="displayed-table">
               <Container>
                    <h1 class="display-6">Members</h1>
                    <TableFrame columnNames={membersProperties}/>
               </Container>
          </div>
          
          {/* ------------- Add Form ----------- */}
          <AddMembers />
          </>
     )
}

export default Members;