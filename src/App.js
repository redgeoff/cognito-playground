import React, { Component } from 'react';
import { signUp } from './examples';

class App extends Component {
  signUp() {
    return signUp();
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.signUp}>Sign Up</button>
      </div>
    );
  }
}

export default App;
