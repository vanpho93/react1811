import React, { Component } from 'react';
import { Word } from './components/Word';
import { ListWord } from './components/ListWord';
import './App.css';

class App extends Component {
  render() {
    const str = 'Happy coding';
    return (
      <div className="App">
        <h3>{ str }</h3>
        {/* <Word /> */}
        <ListWord />
      </div>
    );
  }
}

export default App;
