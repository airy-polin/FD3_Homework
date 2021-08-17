import React from 'react';
import PropTypes from 'prop-types';

import './ProductCardView.css';

class ProductCardView extends React.Component {
	static propTypes = {
		index: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		availability: PropTypes.number.isRequired,
	};

	render() {
		return (
			<div className='ProductCardView'>
				<span className='Title'>{this.props.name}</span>
				<span>Price (USD/item): {this.props.price}</span>
				<span>Available items: {this.props.availability}</span>
			</div>
		);
	};
};

export default ProductCardView;