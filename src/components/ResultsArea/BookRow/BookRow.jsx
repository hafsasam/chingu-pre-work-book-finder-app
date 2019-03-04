import React from 'react';
import Book from './Book/Book';
import './BookRow.css';

const bookrow = (props) => {
  const books = props.bookRow.map(book=>{
    return <Book bookData={book} key={book.key} seeBookDetails={props.seeBookDetails}/>;
  })
  return (
    <div className="bookRow">
      {books}
    </div>
  ) 
}

export default bookrow;