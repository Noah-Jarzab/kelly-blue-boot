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
    fetch('https://kbbbackend.herokuapp.com/shoes?format=api')
      .then((res) => res.json())
      .then((json) => {
        this.setState(() => {
          return {
            shoes: json.shoes
          };
        });
      });
  }
	render() {
		return (
			<main className='App'>
        {console.log(this.state)}
				<Header />
				<Route
					exact
					path='/'
					render={() => {
						return <Home shoes={this.state.data}
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
