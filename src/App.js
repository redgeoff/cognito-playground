import React, { Component } from 'react';
import {
  signUpWithoutEmail,
  authenticateUser,
  getUserData,
  globalSignOut,
  authenticateUserWithoutPassword,
  refreshSession
} from './examples';

class App extends Component {
  signUp() {
    // return signUp();
    return signUpWithoutEmail();
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

  authenticateUserWithoutPassword() {
    return authenticateUserWithoutPassword();
  }

  refreshSession() {
    return refreshSession();
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.signUp}>Sign Up</button>
        <button onClick={this.authenticateUser}>Authenticate User</button>
        <button onClick={this.getUserData}>Get User Data</button>
        <button onClick={this.globalSignOut}>Global Sign Out</button>
        <button onClick={this.authenticateUserWithoutPassword}>
          Authenticate User Without Password
        </button>
        <button onClick={this.refreshSession}>Refresh Session</button>
      </div>
    );
  }
}

export default App;
