import React from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Input from '../UI/input/Input';
import Button from '../UI/button/Button';
import './SearchArea.css';

const searchArea = (props) => {
  let errorMessage = null;
  if(props.emptyQuery){
    errorMessage = <p style={{color:'red'}}>Please enter a search query</p>;
  }
  return (
    <Aux>
      <p className="pageTitle">BOOK FINDER</p>
      <Input
        type="text"
        value={props.value}
        onChange={props.onChange}
        className="searchQuery"
        placeholder="Search by book title or author..."
      />
      <Button onClick={props.onCrossClick} className="crossButton">X</Button>
      <Button onClick={props.onClick} className="searchButton">Search</Button>
      {errorMessage}
    </Aux>
  )
};

export default searchArea;
