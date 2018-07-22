import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleMap from 'google-map-react';

class SimpleMapPage extends Component {


  render() {
    return (
       <GoogleMap
        apiKey="AIzaSyB4VKr73W5l4hLfpGuDvWTnPPdGLxruaiQ"
        zoom="14">
      </GoogleMap>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <SimpleMapPage />
      </div>
    );
  }
}

export default App;
