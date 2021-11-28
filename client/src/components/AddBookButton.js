import React from 'react'

const AddBookButton = (props) => {
  return <button className="btn btn-secondary" onClick={props.addBook}>Add New Book</button>
}

export default AddBookButton