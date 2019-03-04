import React from 'react';
import Button from '../../../UI/button/Button';
import './Book.css';

const book = (props) => {
  const { title, authors, publisher, imageUrl, bookUrl } = props.bookData;
  return (
    <div className="book">
      <div className="bookImageContainer">
        <img src={imageUrl} alt="book" className="bookImage"/>
      </div>
      <div className="bookData">
        <div className="bookDetails">
          <span className="bookTitle">{title}</span>
          <span className="moreDetails">By: {authors}</span>
          <span className="moreDetails">Published by: {publisher}</span>
        </div>
        <div className="seeMoreDetails">
          <Button onClick={() => props.seeBookDetails(bookUrl)} className="seeMoreBtn">More info</Button>
        </div>
      </div>
    </div>
  )
}

export default book;