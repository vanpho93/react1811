import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const str = 'Happy coding';
    return (
      <div className="App">
        <h3>{ str }</h3>
      </div>
    );
  }
}

export default App;
