import React from 'react';
import { FiTrash } from 'react-icons/fi';

function TableRows({rowData, onDelete}) {
    return (
        <>  
        {rowData.map((row, i) => 
            <tr key={i}> {Object.values(row).map((value) =>                                                  
                <td>{value}</td>)}                                        
                <td><FiTrash onClick={() => onDelete(Object.values(row)[0])} /></td>
            </tr>)}   
        </>
    ); 
};

export default TableRows; 