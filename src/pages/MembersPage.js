import React from 'react';
import { Link } from 'react-router-dom';
import AddForm from '../components/AddForm';
import TableColumns from '../components/TableColumns';
import TableDataCell from '../components/TableDataCell';

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
        "Maryland",
        "USA",
        "84372",
        "True", 
    ];

    const memberAttributePlaceHolderText = [
        "First name",
        "Last name",
        "email",
        "Phone number",
        "Address (line 1)",
        "Address (line 2)",
        "State",
        "City",
        "Postal code",
        "Auto renew?",  // dropdown?
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
                        </tr>
                    </tbody>   
                </table>
            </div>
            <AddForm textBoxText={memberAttributePlaceHolderText} title={"Add Member"}></AddForm>
        </>
    );
}

export default MembersPage;