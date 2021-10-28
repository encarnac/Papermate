import React from 'react';
import { Link } from 'react-router-dom';
import AddSubscriptionBillForm from '../components/AddForms/AddSubscriptionBillForm';
import TableColumns from '../components/TableColumns';
import TableDataCell from '../components/TableDataCell';
import { FiEdit } from "react-icons/fi";

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

    const subBillsAttributes1 = [            
        "Payment Method",       // Hmm, inserting here would affect other tables
        "Member ID",
    ];

    const subBillsAttributes2 = [            
        "Total", // not an input, should be calculated later based on plan_type selected
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
                            <button class="edit-button"><FiEdit/></button>   
                        </tr>
                    </tbody>   
                </table>
            </div>
            <AddSubscriptionBillForm textBoxText1={subBillsAttributes1} textBoxText2={subBillsAttributes2} title={"Add Subscription Bill"} buttonText={"Add"}></AddSubscriptionBillForm>

        </>
    );
}

export default SubscriptionBillsPage;