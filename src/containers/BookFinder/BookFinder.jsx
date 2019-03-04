import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import SearchArea from '../../components/SearchArea/SearchArea';
import ResultsArea from '../../components/ResultsArea/ResultsArea';
import axios from '../../axios-bookfinder';
class BookFinder extends Component {

  state = {
    isLoading: false,
    bookResults: [],
    error: false,
    searchQuery: '',
    emptyQuery: false
  };

  searchBook = () => {
    if (this.state.searchQuery.trim() !== '') {
      this.setState({
        isLoading: true,
        emptyQuery: false,
        error: false
      });
      axios.get(`volumes?q=${this.state.searchQuery.trim()}`).then(response => {
        const bookData = response.data.totalItems > 0
          ? response.data.items
            .map(book => {
              const bookInfo = { ...book.volumeInfo };
              const indentifier = typeof bookInfo.industryIdentifiers !== 'undefined'
                ? [...bookInfo.industryIdentifiers]
                : bookInfo.infoLink;
              const url = bookInfo.infoLink;
              const authors = typeof bookInfo.authors !== 'undefined'
                ? bookInfo.authors.reduce((authors, author, index) => {
                  return index === 0
                    ? authors + author
                    : authors + ', ' + author;
                }, '')
                : 'N.A.';
              const imgLink = bookInfo.imageLinks ? bookInfo.imageLinks.thumbnail : null;
              const publisher = bookInfo.publisher !== '' ? bookInfo.publisher : 'N.A.';
              const title = bookInfo.title;
              const key = indentifier[0].type + indentifier[0].identifier;
              return {
                bookUrl: url,
                authors: authors,
                imageUrl: imgLink,
                publisher: publisher,
                title: title,
                key: key
              };
            })
          : null;
        this.setState({
          bookResults: bookData,
          isLoading: false
        });
      })
        .catch(err => {
          this.setState({
            error: true
          })
        });
    }
    else {
      this.setState({
        emptyQuery: true
      });
    }
  };

  setSearchQuery = (e) => {
    const value = e.currentTarget.value;
    this.setState({
      searchQuery: value
    });
  };

  onCrossClickHandler = () => {
    this.setState({
      searchQuery: ''
    });
  };

  seeBookDetailsHandler = (url) => {
    window.open(url);
  };

  render() {
    return (
      <Aux>
        <SearchArea
          onClick={() => this.searchBook()}
          value={this.state.searchQuery}
          onChange={(e) => this.setSearchQuery(e)}
          onCrossClick={() => this.onCrossClickHandler()}
          emptyQuery={this.state.emptyQuery}
        />
        <ResultsArea
          booksData={this.state.bookResults}
          seeBookDetails={this.seeBookDetailsHandler}
          isLoading={this.state.isLoading}
          error={this.state.error} />
      </Aux>
    );
  }
}

export default BookFinder;