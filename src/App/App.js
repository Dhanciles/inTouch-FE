import React, { Component } from 'react';
import './App.css';
import SignInUser from '../SignInUser/SignInUser.js'


export class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <h1>inTouch.</h1>
        </header>
        <SignInUser /> 
      </div>
    );
  }
}

