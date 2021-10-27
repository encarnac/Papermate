import React from 'react';
import { Link } from 'react-router-dom';
import AddForm from '../components/AddForm';
import SearchForm from '../components/SearchForm';
import TableColumns from '../components/TableColumns';
import TableDataCell from '../components/TableDataCell';
import TextBox from '../components/TextBox';


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
    
        const booksAttributePlaceHolderText = [
            "isbn",
            "Title",
            "Author's first name",
            "Author's last name",
            "Description",
            "Date published",
            "Date released",
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
                            </tr>
                        </tbody>   
                    </table>
                </div>
                <AddForm textBoxText={booksAttributePlaceHolderText} title={"Add Book"} buttonText={"Add"}></AddForm>

                <SearchForm textBoxText={"Enter isbn, title, etc..."} searchText={"Search inventory"}></SearchForm>
            </>
        );

}

export default BooksPage;