import React from 'react';
import { Link } from 'react-router-dom';
import TableFrame from '../components/TableFrame';
import { Container } from 'react-bootstrap'

function Reviews() {
     const reviewsProperties = ['review_id', 'member_id', 'isbn', 'date_posted', 'comment', 'rating', 'recommend'];
     return (
          <>
          {/* ------------- Table Here ----------- */}
          <div class="displayed-table">
               <Container>
                    <h1 class="display-6">Reviews</h1>
                    <TableFrame columnNames={reviewsProperties}/>
               </Container>
          </div>




          {/* ------------- Add Data Here ----------- */}

          </>
     )
}

export default Reviews;