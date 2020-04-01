import React from 'react';
import './App.css';
import pig from '../img/daisy.png'
import Form from './Form.js'
import Rank from './Rank.js'
import Header from './Header.js'


function App() {
  return (
    <div>
      <div className="container">
        <img className="pig" src={pig} />
        <Header/>
        <Form />
      </div>
      <div className="ranking">
        <span className="rank-title">Current price around the world</span>
        <Rank />
      </div>
    </div>
  );
}

export default App;
