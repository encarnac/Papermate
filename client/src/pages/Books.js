import React from 'react';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Axios from 'axios';
import TableFrame from '../components/TableFrame';
import AddBooks from '../forms/AddBooks';
import AddBookButton from '../components/AddBookButton';
import FilterBooks from '../forms/FilterBooks';
import FilterBooksButton from '../components/FilterBooksButton';


function Books() {
     const bookProperties = ['isbn', 'title', 'author_first', 'author_last', 'description', 'date_published', 'release_date', 'stock'];
     const [addState, setAddState] = useState('start')
     const [filterState, setFilterState] = useState('start')
     const[listBooks, setBooks] = useState([])
     
     useEffect(()=>{
          Axios.get("http://flip2.engr.oregonstate.edu:5983/books").then((result)=>{
          setBooks(result.data)
          });
          },[])

     return (
          <>
          {/* ------------- Table Here ----------- */}
          <div className="displayed-table">
               <Container>
                    <h1 className="display-6">Books</h1>
                    <TableFrame keys={bookProperties} items={listBooks}/>
               </Container>
          </div>

          {/* ------------- Add Form ----------- */}
          {/* Displays the 'Add' button and then changes to the 'Add Form' when clicked */}
          <div className="row">
               <div className="col">
                    <div>
                         {addState === 'start' && (
                              <AddBookButton addBook={() => setAddState('add-book')} />
                         )}

                         {addState === 'add-book' && <AddBooks />}
                    </div>
               </div>

               {/* Displays the 'Filter' button and then changes to the 'Filter Form' when clicked */}
               <div className="col">
                    <div>
                         {filterState === 'start' && (
                              <FilterBooksButton filterBooks={() => setFilterState('add-filter')} />
                         )}

                         {filterState === 'add-filter' && <FilterBooks />}
                    </div>
               </div>
          </div>
          
          </>          
     );
};

export default Books;