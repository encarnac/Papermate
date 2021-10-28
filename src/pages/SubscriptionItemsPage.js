import React from 'react';
import { Link } from 'react-router-dom';
import AddSubItemForm from '../components/AddForms/AddSubItemForm';
import TableColumns from '../components/TableColumns';
import TableDataCell from '../components/TableDataCell';

function SubscriptionItemsPage() {

    // these arrays will come later come from SELECT statements    
    const tableHeaders = [
        "subscription_items_id",
        "subscription_id",
        "isbn",
        "quantity",           
        "book_status",           
        
    ];

    const sampleTableDataCells = [
        "12",
        "24",
        "9782547654001",             
        "1",               
        "shipped",           
                
    ];

    const subItemsTextBoxPlaceHolderText = [            
        "Subscription ID",       // Hmm, inserting here would affect other tables
        "isbn",
        "Quantity",             // number
    ];


    return (
        <>
            <h2>Subscription Items - Contains information about a book selected for an active subscription</h2>
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
            <AddSubItemForm textBoxText={subItemsTextBoxPlaceHolderText} title="Add Subscription Item" buttonText={"Add"}></AddSubItemForm>
        </>
    );
}

export default SubscriptionItemsPage;