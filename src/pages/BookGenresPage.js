import React from 'react';
import { Link } from 'react-router-dom';
import AddForm from '../components/AddForm';
import TableColumns from '../components/TableColumns';
import TableDataCell from '../components/TableDataCell';

function BookGenresPage() {
    
    const tableHeaders = [
        "book_genres_id",
        "genre_id",         // FK from Genres
        "isbn"              // FK from Books
    ];

    const sampleTableDataCells = [
        "111222333",
        "4812",
        "9782547654001"     // the stranger (made up isbn)
    ];

    const bookGenresAttributePlaceHolderText = [
        "Genre ID",
        "isbn"          
    ];


    return (
        <>
            <h2>Book Genres - Assigns each book to different genres (categories). Represents a relationship
                table for the M:M relationship between Genres and Books.</h2>
            <div class="table-div">
                <table class="table-top">            
                    <thead>
                        <tr>
                            <TableColumns tableHeaders={tableHeaders}></TableColumns>
                        </tr>
                    </thead>
                    <tbody >
                        <tr>                        
                           <TableDataCell rowData={sampleTableDataCells}></TableDataCell>
                        </tr>
                    </tbody>   
                </table>
            </div>
            <AddForm textBoxText={bookGenresAttributePlaceHolderText} title={"Add Book Genre"} buttonText={"Add"}></AddForm>
        </>
    );
}

export default BookGenresPage;