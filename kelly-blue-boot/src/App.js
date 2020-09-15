import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Shoes from './Shoes';
// import Shoe from './Shoe';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shoes: [],
		};
  }
  componentDidMount() {
    fetch('https://kbbbackend.herokuapp.com/shoes')
      .then((res) => res.json())
      .then((json) => {
        this.setState({
            shoes: json
          });
        });
	}
	render() {
		return (
			<main className='App'>
				<Header />
				<Route
					exact
					path='/'
					render={() => {
						return <Home shoes={this.state[0]}
            />;
					}}
				/>
				<Route
					exact
					path='/shoes'
					render={() => {
						return <Shoes/>;
					}}
				/>
			</main>
		);
	}
}

export default App;
