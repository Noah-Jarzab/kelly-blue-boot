import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoe: [],
    };
  }
  render() {
    return (
      <main className='App'>
        <Header />
        <Route
          exact path='/'
          render={() => {
            return <Home />;
          }}
      />
      </main>
    )
  }
}

export default App;
