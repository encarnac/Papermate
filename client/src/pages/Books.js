import React from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import TableFrame from '../components/TableFrame';
import AddBooks from '../forms/AddBooks';
import AddBookButton from '../components/AddBookButton';
import FilterBooks from '../forms/FilterBooks';
import FilterBooksButton from '../components/FilterBooksButton';


function Books() {
     const bookProperties = ['isbn', 'title', 'author_first', 'author_last', 'description', 'date_published', 'release_date', 'avg_rating', 'stock', ''];
     const [addState, setAddState] = useState('start')
     const [filterState, setFilterState] = useState('start')


     return (
          <>
          {/* ------------- Table Here ----------- */}
          <div class="displayed-table">
               <Container>
                    <h1 class="display-6">Books</h1>
                    <TableFrame columnNames={bookProperties}/>
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