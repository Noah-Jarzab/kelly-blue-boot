import React, { Component } from 'react';
import CarouselHome from './CarouselHome';
// import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className='home'>
                {console.log(this.props)}
                <CarouselHome shoes={this.props.shoes} />
                <br></br>
                <h4>About</h4>
                <p>Kelly Blue Boot is a resource designed to see the MSRP and other general information about various types of shoes.</p>
            </div>
        )
    }
}

export default Home;