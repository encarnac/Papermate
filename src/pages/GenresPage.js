import React from 'react';
import { Link } from 'react-router-dom';
import AddForm from '../components/AddForm';
import TableColumns from '../components/TableColumns';
import TableDataCell from '../components/TableDataCell';

function GenresPage() {

    const tableHeaders = [
        "genre_id",
        "genre",            
        "community_url"             
    ];

    const sampleTableDataCells = [
        "4812",
        "Philosophy; existentialism",
        "https://discord.gg/jqdfkhpt"       
    ];

    const genresAttributePlaceHolderText = [
        "Genre",
        "Discord link"          
    ];


    return (
        <>
            <h2>Book Genres - The different genres the books will be categorized by. Each genre has its own Discord
                link for further discussions.</h2>
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
            <AddForm textBoxText={genresAttributePlaceHolderText} title={"Add Genre"} buttonText={"Add"}></AddForm>
        </>
    );
}

export default GenresPage;