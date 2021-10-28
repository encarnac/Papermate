import React from 'react';
import { Link } from 'react-router-dom';
import AddBookForm from '../components/AddForms/AddBookForm';
import SearchForm from '../components/SearchForm';
import TableColumns from '../components/TableColumns';
import TableDataCell from '../components/TableDataCell';
import TextBox from '../components/TextBox';
import { FiEdit } from "react-icons/fi";


function BooksPage() {

        // these arrays will come later come from SELECT statements
        const tableHeaders = [
            "isbn",
            "title",
            "author_first",
            "author_last",
            "description",
            "date_published",
            "release_date",
            "avg_rating",
            "stock"
        ];
    
        const sampleTableDataCells = [
            "9782547654001",
            "The Stranger",
            "Albert",
            "Camus",
            "Man kills man, doesn't know how to feel about it.",
            "4/27/1941",
            "5/27/1941",        
            "4.5 / 5",            
            "40,000"
        ];
    
        const booksAttributes1 = [
            "ISBN",
            "Title",
            "Author's first name",
            "Author's last name",        
        ];

        const booksAttributes2 = [
            "Average rating",
            "Amount in stock"    
        ];
    
        return (
            <>
                <h2>Books - A carefully selected and highly recommended fiction novel offered to members</h2>
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
                               <button class="edit-button"><FiEdit/></button>
                            </tr>
                        </tbody>   
                    </table>
                </div>
                <AddBookForm textBoxText1={booksAttributes1} textBoxText2={booksAttributes2} title={"Add Book"} buttonText={"Add"}></AddBookForm>

                <SearchForm textBoxText={"Enter isbn, title, etc..."} searchText={"Search inventory"}></SearchForm>
            </>
        );

}

export default BooksPage;