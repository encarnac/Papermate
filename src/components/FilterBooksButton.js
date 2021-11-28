import React from 'react'

const FilterBooksButton = (props) => {
  return <button className="btn btn-secondary" onClick={props.filterBooks}>Filter Books</button>
}

export default FilterBooksButton;