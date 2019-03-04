import React, { Component } from 'react';
import './App.css';
import BookFinder from './containers/BookFinder/BookFinder';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFrown, far } from '@fortawesome/free-regular-svg-icons';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

library.add(faFrown, faCircleNotch, far);

class App extends Component {
  render() {
    return (
      <div className="App">
        <BookFinder />
      </div>
    );
  }
}

export default App;
