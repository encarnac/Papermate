import React from 'react';

function TableRows({rowData}) {
    return (
        <>  
        {rowData.map((row, i) => 
            <tr key={i}>  
                {Object.values(row).map((value) => 
                    <td>{value}</td>)}
            </tr>)}   
        </>
    ); 
};

export default TableRows; 