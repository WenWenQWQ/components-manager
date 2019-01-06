import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { version, Button } from 'antd';
//import "antd/dist/antd.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button>点击一下吧</button>
          <Button type="primary">Hello</Button>
        </header>
      </div>
    );
  }
}

export default App;
