import React from 'react';
import TableColumns from './TableColumns';

function TableFrame({columnNames, }) {
    return (
        <>
        <table class="table table-hover">
            <thead>
                <tr>
                {columnNames.map((columnNames, i) =><TableColumns columnName={columnNames} />)}
                </tr>
            </thead>
            <tbody>
                <tr>
                    {/* ---------- Data Values/Rows Go Here ----------------- */}
                </tr>
            </tbody>
        </table>
        </>
    )
}

export default TableFrame;