import React, { Component } from 'react';
import { signUp, authenticateUser } from './examples';

class App extends Component {
  signUp() {
    return signUp();
  }

  authenticateUser() {
    return authenticateUser();
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.signUp}>Sign Up</button>
        <button onClick={this.authenticateUser}>Authenticate User</button>
      </div>
    );
  }
}

export default App;
