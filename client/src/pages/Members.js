import { React, useState, useEffect } from 'react';
import TableFrame from '../components/TableFrame';
import AddMembers from '../forms/AddMembers';
import Axios from 'axios';
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap'

function Members() {
     const membersProperties = ['member_id', 'first_name', 'last_name', 'email', 'phone_number', 'address_line', 'address_line_2', 'state', 'city', 'postal_code', 'auto_renew'];
     const [formState, setFormState] = useState([])
     const [listMembers, setMembers] = useState([])

     useEffect(()=>{
          Axios.get("http://flip2.engr.oregonstate.edu:5983/members").then((result)=>{
          setMembers(result.data)
          });
          },[])
     
     return (
          <>
          {/* ------------- Table Here ----------- */}
          <div className="displayed-table">
               <Container>
                    <h1 className="display-6">Members</h1>
                    <TableFrame keys={membersProperties} items={listMembers} />
               </Container>
          </div>
          
          {/* ------------- Add Form ----------- */}
          <AddMembers />
          </>
     )
}

export default Members;