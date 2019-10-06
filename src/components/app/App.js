import React from 'react';
import logo from '../../assets/logo.svg';
import './App.css';
import Counter from '../counter/Counter' 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter/>
      </header>
    </div>
  );
}

export default App;
