import React, { Component } from 'react';
import fire from '../config/fire';
class Home extends Component {

    logout() {
        fire.auth().signOut();
    }

    render() {
      return (
        <div>
            <h1>Hello World!</h1>
            <button onClick={this.logout}>Logout</button>

        </div>
      )
    }
  }

  export default Home;