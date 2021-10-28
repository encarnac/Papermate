import React from 'react';
import { Link } from 'react-router-dom';
import AddReviewForm from '../components/AddForms/AddReviewForm';
import TableColumns from '../components/TableColumns';
import TableDataCell from '../components/TableDataCell';
import { FiTrash, FiEdit } from "react-icons/fi";

function ReviewsPage() {
        // these arrays will come later come from SELECT statements
        const tableHeaders = [
            "review_id",
            "member_id",        // 42
            "isbn",
            "date_posted",
            "comment",
            "rating",
            "recommend"
        ];
    
        const sampleTableDataCells = [
            "1",
            "42",
            "9782547654001",
            "6/27/21",
            "I loved the part when they were on the beach.",
            "4.5 / 5",
            "True"   
        ];
    
        const reviewsAttributePlaceHolderText = [
            "Member ID",
            "ISBN",
            "Rating"        
        ];
    
    
        return (
            <>
                <h2>Reviews - Records the members' reviews of books</h2>
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
                               <button class="delete-button">< FiTrash/></button>
                            </tr>
                        </tbody>   
                    </table>
                </div>
                <AddReviewForm textBoxText={reviewsAttributePlaceHolderText} title={"Add Review"} buttonText={"Add"}></AddReviewForm>

            </>
        );
}

export default ReviewsPage;