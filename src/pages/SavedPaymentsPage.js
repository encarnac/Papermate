import React from 'react';
import { Link } from 'react-router-dom';
import AddPaymentForm from '../components/AddForms/AddPaymentForm';
import TableColumns from '../components/TableColumns';
import TableDataCell from '../components/TableDataCell';
import { FiTrash, FiEdit } from "react-icons/fi";

function SavedPaymentsPage() {

    // these arrays will come later come from SELECT statements    
    const tableHeaders = [
        "payment_method",
        "member_id",
        "cc_name",
        "cc_num",
        "cc_cvc",
        "cc_exp"
    ];

    const sampleTableDataCells = [
        "000004",
        "014161821",
        "John Doe",
        "4444000012345678",
        "123",
        "12/24"
    ];

    const paymentAttributePlaceHolderText = [
        "Member ID",
        "Name on Card",
        "Credit Card Number",
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
                            <button class="edit-button"><FiEdit/></button>
                            <button class="delete-button">< FiTrash/></button>   
                        </tr>
                    </tbody>   
                </table>
            </div>
            <AddPaymentForm textBoxText={paymentAttributePlaceHolderText} title={"Add New Payment Method"} buttonText={"Add"}></AddPaymentForm>
            {/* <AddForm textBoxText={paymentAttributePlaceHolderText} title={"Update Payment Method"} buttonText={"Update"}></AddForm> */}
        </>
    );
}

export default SavedPaymentsPage;