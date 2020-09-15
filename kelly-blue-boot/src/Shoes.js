import React, { Component } from 'react';


class Shoes extends Component {
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
				this.setState(() => {
					return {
						shoes: json,
					};
				});
            });
	}

	render() {
		return (
			<div>
				{this.state.shoes.map((shoes) => {
                    return (
                        <span className='shoes' key={shoes.name}>
                            <h3>{shoes.name}</h3>
                            <img className='shoeImage' src={shoes.image} key={shoes.id} alt='No Image Found' />
                            <br></br>
                        </span>
                    )
                })}
			</div>
		);
	}
}

export default Shoes;