import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Shoe from './Shoe';

class Shoes extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shoes: [],
			show: false,
			activeItem: '',
			error: false,
		};
	}

	handleShow = () => {
		this.setState({ show: true });
	};

	handleClose = () => {
		this.setState({ show: false, error: false, activeItem: '' });
	};

	handleError = () => {
		this.setState({ error: true });
	};

	getDetail = (id) => {
		fetch(`https://kbbbackend.herokuapp.com/shoes${id}`)
			.then((res) => res.json())
			.then((res) => {
				this.setState({
					activeItem: res,
				});
			})
			.then((res) => this.handleShow())
			.catch((err) => {
				this.handleError();
				this.handleShow();
			});
	};

	// componentDidMount() {
	// 	fetch('https://kbbbackend.herokuapp.com/shoes')
	// 		.then((res) => res.json())
	// 		.then((json) => {
	// 			this.setState(() => {
	// 				return {
	// 					shoes: json,
	// 				};
	// 			});
	// 		});
	// }

	render() {
		if (this.props.image) {
			return (
				<CardColumns>
					{this.props.image.map((shoes) => {
						return (
							<Card key={shoes.id}>
								{shoes.image && (
									<Card.Img
										variant='top'
										src={shoes.image ? shoes.image : ''}
										alt={shoes.name}
									/>
								)}
								<Card.Body>
									{shoes.image ? (
										''
									) : (
										<Card.Title>No Image Available</Card.Title>
									)}
									<Card.Text className='text-muted'>{shoes.name}</Card.Text>
									<Button
										onClick={() => this.getDetail(shoes.id)}
										variant='outline-dark'>
										Details
									</Button>
								</Card.Body>
							</Card>
						);
					})}
					{(this.state.activeItem || this.state.error) && (
						<Shoe
							shoe={this.state.activeItem}
							show={this.state.show}
							handleClose={this.handleClose}
							error={this.state.error}
						/>
					)}
				</CardColumns>
			);
		} else {
			return (
				<Container
					className='d-flex justify-content-center align-items-center align-content-center'
					style={{ minHeight: '90vh' }}>
					<span style={{ paddingRight: '1em' }}>Loading results{'  '}</span>
					<Spinner animation='border' variant='dark' size='sm' />
				</Container>
			);
		}
	}
}

export default Shoes;
