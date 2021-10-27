import React from 'react';


function TableDataCell({rowData}) {
    return ( 
        <>
            {rowData.map((text, i) => <td class="table-data-cell">{text}</td>)}      
        </>
    );
}

export default TableDataCell;