import React, { Component } from 'react';
import UserCard from './components/UserCard'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='card_container'>
        <UserCard/>
      </div>
    );
  }
}

export default App;
