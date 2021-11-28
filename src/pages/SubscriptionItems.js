import React from 'react';
import TableFrame from '../components/TableFrame';
import { Container } from 'react-bootstrap'

function SubscriptionItems() {
     const subscriptionItemsProperties = ['subscription_tems_id', 'subscription_id', 'isbn', 'quantity', 'book_status'];
     return (
          <>
          {/* ------------- Table Here ----------- */}
          <div class="displayed-table">
               <Container>
                    <h1 class="display-6">Subscription Items</h1>
                    <TableFrame columnNames={subscriptionItemsProperties}/>
               </Container>
          </div>




          {/* ------------- Add Data Here ----------- */}

          </>
     )
}
export default SubscriptionItems;