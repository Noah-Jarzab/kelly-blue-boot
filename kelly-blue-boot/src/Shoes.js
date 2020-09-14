import React, { Component } from 'react';

class Shoes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shoes: [],
        };
    }

    componentDidMount() {
        fetch('https://kbbbackend/heroku.com/shoes?format=api');
    }

    render() {
        return(
        <div>
            <p>Test</p>
        </div>
        )}
}

export default Shoes;