import React from 'react';
import TableColumns from './TableColumns';
import TableRows from './TableRows';

function TableFrame({keys, items, onDelete}) {
    return (
            <>
            <table className="table table-hover">
                <thead>
                    <tr>
                    {keys.map((key, index)=> <TableColumns columnName={key} />)}
                    </tr>
                </thead> 
                <tbody>
                    <TableRows rowData={items} onDelete={onDelete} />
                </tbody>
            </table>
            </>
    )
}

  export default TableFrame