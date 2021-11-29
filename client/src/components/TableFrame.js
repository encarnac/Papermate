import React from 'react';
import TableColumns from './TableColumns';
import TableRows from './TableRows';

function TableFrame({keys, items}) {


    return (
            <>
            <table className="table table-hover">
                <thead>
                    <tr>
                    {keys.map((key, index)=> <TableColumns columnName={key} />)}
                    </tr>
                </thead> 
                <tbody>
                    {items.map((row, index)=> <tr key={index}><TableRows index={index} data={row} keys={keys}/></tr>)}
                </tbody>
            </table>
            </>
    )
}

  export default TableFrame