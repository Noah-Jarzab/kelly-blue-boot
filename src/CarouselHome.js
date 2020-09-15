import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const CarouselHome = ({ shoes }) => {
	return (
		<Carousel style={{ minHeight: '45vh' }}>
			{shoes.map((item) => {
				return (
					<Carousel.Item key={item.id} style={{ maxHeight: '90vh' }}>
						<img
							className='carouselImage'
							style={{
								height: '90vh',
								width: '100%',
								objectFit: 'cover',
								overflow: 'hidden',
							}}
							src={item.image}
							alt={item.name}
						/>
						<Carousel.Caption>
							<p>{item.manufacturer}</p>
						</Carousel.Caption>
					</Carousel.Item>
				);
			})}
		</Carousel>
	);
};

export default CarouselHome;
