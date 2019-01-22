import React, { Component } from 'react';
import {
  signUp,
  authenticateUser,
  getUserData,
  globalSignOut
} from './examples';

class App extends Component {
  signUp() {
    return signUp();
  }

  authenticateUser() {
    return authenticateUser();
  }

  getUserData() {
    return getUserData();
  }

  globalSignOut() {
    return globalSignOut();
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.signUp}>Sign Up</button>
        <button onClick={this.authenticateUser}>Authenticate User</button>
        <button onClick={this.getUserData}>Get User Data</button>
        <button onClick={this.globalSignOut}>Global Sign Out</button>
      </div>
    );
  }
}

export default App;
