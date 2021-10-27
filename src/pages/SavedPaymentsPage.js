import React from 'react';
import { Link } from 'react-router-dom';
import AddForm from '../components/AddForm';
import TableColumns from '../components/TableColumns';
import TableDataCell from '../components/TableDataCell';

function SavedPaymentsPage() {

    // these arrays will come later come from SELECT statements    
    const tableHeaders = [
        "payment_method",
        "member_id",
        "cc_name",
        "cc_num",
        "cc_exp",
        "cc_cvc"
    ];

    const sampleTableDataCells = [
        "9999",
        "42",
        "Visa",
        "4444000012345678",
        "12/24",
        "123"
    ];

    const paymentAttributePlaceHolderText = [
        "Payment Method",   // dropdown?
        "Member ID",
        "Name",
        "Number",
        "Expiration",
        "CVC"
    ];


    return (
        <>
            <h2>Saved Payments - Forms of payment tied to a particular Member, can save up to 4</h2>
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
            <AddForm textBoxText={paymentAttributePlaceHolderText} title={"Add New Payment Method"} buttonText={"Add"}></AddForm>
            <AddForm textBoxText={paymentAttributePlaceHolderText} title={"Update Payment Method"} buttonText={"Update"}></AddForm>
        </>
    );
}

export default SavedPaymentsPage;