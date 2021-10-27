import React from 'react';
import { Link } from 'react-router-dom';
import AddForm from '../components/AddForm';
import TableColumns from '../components/TableColumns';
import TableDataCell from '../components/TableDataCell';

function SubscriptionBillsPage() {

    // these arrays will come later come from SELECT statements    
    const tableHeaders = [
        "subscription_id",
        "payment_method",
        "member_id",
        "plan_type",           
        "order_date",           
        "expiration_date",      
        "total",                
        "order_completed"       
    ];

    const sampleTableDataCells = [
        "24",
        "9999",             // FK from Saved Payments
        "42",               // FK from members
        "Tier 1",           
        "10/27/21",         
        "11/27/21",
        "67.24",            
        "True"
    ];

    const subBillsTextBoxPlaceHolderText = [            
        "Payment Method",       // Hmm, inserting here would affect other tables
        "Member ID",
        "Plan Type",
        "Expiration Date",
        "Total",
        "Order completed?"
    ];


    return (
        <>
            <h2>Subscription Bills - Details of one month’s subscription bill charged to a member</h2>
            <div class="table-div">
                <table class="table-top">            
                    <thead>
                        <tr>
                            <TableColumns tableHeaders={tableHeaders}></TableColumns>
                        </tr>
                    </thead>
                    <tbody >
                        <tr>              
                            <TableDataCell rowData={sampleTableDataCells}></TableDataCell>   
                        </tr>
                    </tbody>   
                </table>
            </div>
            <AddForm textBoxText={subBillsTextBoxPlaceHolderText} title={"Add Subscription Bill"} buttonText={"Add"}></AddForm>

        </>
    );
}

export default SubscriptionBillsPage;