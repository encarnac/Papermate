import React from 'react';
import TableFrame from '../components/TableFrame';
import { Container } from 'react-bootstrap'

function SubscriptionBills() {
     const subscriptionBillsProperties = ['subscription_id', 'payment_method', 'member_id', 'plan_type', 'order_date', 'expiration_date', 'total', 'order_completed'];
     return (
          <>
          {/* ------------- Table Here ----------- */}
          <div class="displayed-table">
               <Container>
                    <h1 class="display-6">Subscription Bills</h1>
                    <TableFrame columnNames={subscriptionBillsProperties}/>
               </Container>
          </div>




          {/* ------------- Add Data Here ----------- */}

          </>
     )
}
export default SubscriptionBills;