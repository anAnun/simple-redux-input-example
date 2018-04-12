import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Store from './Store';
import InputComponent from './InputComponent';
import { Provider } from 'react-redux'

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <InputComponent />
      </Provider>
    );
  }
}

export default App;
