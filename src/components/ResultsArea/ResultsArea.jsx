import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BookRow from './BookRow/BookRow';
import './ResultsArea.css';

const resultArea = (props) => {
  let books = (<div className="beforeSearchMessage">
    <p><FontAwesomeIcon icon={{ iconName: 'frown', prefix: 'far' }} /> <span className="message">Only the void here... Try searching for a book!</span></p>
  </div>);
  if (props.isLoading) {
    books = (<div className="beforeSearchMessage">
      <p><FontAwesomeIcon icon="circle-notch" spin size="2x" /></p>
    </div>);
  }
  if (!props.isLoading && props.booksData !== null && props.booksData.length > 0) {
    books = props.booksData.reduce((result, book, index) => {
      if (index % 2 === 0) {
        let arr = [];
        arr.push(book);
        result.push(arr);
      }
      else {
        result[result.length - 1].push(book);
      }
      return result;
    }, [])
      .map(bookRow => {
        return <BookRow bookRow={bookRow} key={bookRow[0].bookUrl} seeBookDetails={props.seeBookDetails} />
      });
  }
  else if(!props.isLoading && props.booksData === null){
    books = (<div className="beforeSearchMessage">
    <p><FontAwesomeIcon icon={{ iconName: 'frown', prefix: 'far' }} /> <span className="message">More void... Maybe try searching for something else...</span></p>
  </div>);
  }
  else if(props.error === true){
    books = (<div className="beforeSearchMessage">
    <p><FontAwesomeIcon icon={{ iconName: 'frown', prefix: 'far' }} /> <span className="message">Something went wrong! Please try again</span></p>
  </div>);
  }

  return (
    <div className="resultsContainer">
      {books}
    </div>
  )
}

export default resultArea;
