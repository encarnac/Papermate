import React from 'react';
import TableColumns from './TableColumns';
import TableRows from './TableRows';

function TableFrame({columnNames, rowData}) {
    return (
        <>
        <table class="table table-hover">
            <thead>
                <tr>
                {columnNames.map((columnNames, i) =><TableColumns columnName={columnNames} />)}
                </tr>
            </thead>
            <tbody>
                {/* Working on making this more modular for every page, not just genre */}
                {rowData.map((rowData, i) => <tr key={i}>
                    <td>{rowData.genre_id}</td>
                    <td>{rowData.genre}</td>
                    <td>{rowData.community_url}</td>
                </tr>)}
            </tbody>
        </table>
        </>
    )
}

export default TableFrame;