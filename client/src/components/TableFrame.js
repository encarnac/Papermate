import React from 'react';
import TableColumns from './TableColumns';
import TableRows from './TableRows';

function TableFrame({columnNames, rowData}) {
 
    // {rowData.map((rowData, i) => <tr key={i}>
    // <td>{rowData.genre_id}</td>
    // <td>{rowData.genre}</td>
    //  <td>{rowData.community_url}</td>
    // </tr>)}
    return (
        <>
        <table class="table table-hover">
            <thead>
                <tr>
                {columnNames.map((columnNames, i) =><TableColumns columnName={columnNames} />)}
                </tr>
            </thead>
            <tbody>
                <TableRows rowData={rowData}></TableRows>
            </tbody>
        </table>
        </>
    )
}

export default TableFrame;