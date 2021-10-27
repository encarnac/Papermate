import React from 'react';


function TableColumns({tableHeaders}) {
    return ( 
        <>
            {tableHeaders.map((text, i) => <th class="table-header">{text}</th>)}      
        </>
    );
}

export default TableColumns;