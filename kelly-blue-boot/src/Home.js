import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                {console.log(this.props)}
                <h2>{this.props.data}</h2>
            </div>
        )
    }
}

export default Home;