import React from 'react';


function TableRows({index, data, keys}) {
    return (
        keys.map((key, index)=> <td key={data[key]}>{data[key]}</td>)
    )
}
    
export default TableRows;