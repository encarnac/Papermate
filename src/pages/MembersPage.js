import React from 'react';
import { Link } from 'react-router-dom';
import AddMemberForm from '../components/AddForms/AddMemberForm';
import TableColumns from '../components/TableColumns';
import TableDataCell from '../components/TableDataCell';
import { FiEdit } from "react-icons/fi";

function MembersPage() {

    // these arrays will come later come from SELECT statements
    const tableHeaders = [
        "member_id",
        "first_name",
        "last_name",
        "email",
        "phone_number",
        "address_line_1",
        "address_line_2",
        "state",
        "city",
        "postal_code",
        "auto_renew",
    ];

    const sampleTableDataCells = [
        "42",
        "Roy",
        "Rogers",
        "cherrycoke@hotmail.com",
        "(555)432-1987",
        "456 Real St",        
        "Suite 2A", 
        "CA",
        "USA",
        "84372",
        "True", 
    ];

    const memberAttributes1 = [
        "First name",
        "Last name",
        "Email",
        "Phone Number",
    ];

    const memberAttributes2 = [
        "Address (line 1)",
        "Address (line 2)",

    ];

    const memberAttributes3 = [
        "City",
        "Postal code",
    ];


    return (
        <>
            <h2>Members - records information about current and past subscription holders</h2>
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
            <AddMemberForm textBoxText1={memberAttributes1} textBoxText2={memberAttributes2} textBoxText3={memberAttributes3} title={"Add Member"} buttonText={"Add"}></AddMemberForm>
        </>
    );
}

export default MembersPage;