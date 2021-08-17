import React from 'react';
import PropTypes from 'prop-types';

import './Product.css';

class Product extends React.Component {
	static propTypes = {
		index: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		sample: PropTypes.string.isRequired,
		availability: PropTypes.number.isRequired,
		checked: PropTypes.any,
		isEditable: PropTypes.any, // 1- open, 2 - frozen
	};

	highlightProduct = (event) => {
		event.stopPropagation();
		this.props.highlightProduct(this.props.index);
	};

	deleteProduct = (event) => {
		event.stopPropagation();
		this.props.deleteProduct(this.props.index);
	};

	editProduct = (event) => {
		event.stopPropagation();
		this.props.editProduct(this.props.index);
	};

	render() {
		let priceEnding = ' USD per item',
			availabilityEnding = ' pieces available';

		let checked = (this.props.checked === this.props.index) ? 'checked' : '';
		let classes = `Product ${checked}`;

		let disabled = (this.props.isEditable === 2) ? 'disabled' : null;

		return (
			<div className={classes} id={this.props.index} onClick={this.props.isEditable !== 2 ? this.highlightProduct : null}>
				<div className='Media'>
					<img src={this.props.sample} alt='product model' />
				</div>

				<div className='Info'>
					<div className='Title'>{this.props.name}</div>
					<div className='Price'>
						<span className='Amount'>{this.props.price + priceEnding}</span>
					</div>
					<div className='Quantity'>
						<span className='Number'>{this.props.availability + availabilityEnding}</span>
					</div>
					<div className='Buttons'>
						<input className='Edit' type='button' value='edit' disabled={disabled} onClick={this.editProduct} />
						<input className='Delete' type='button' value='delete' disabled={disabled} onClick={this.deleteProduct} />
					</div>
				</div>
			</div>
		);
	};
};

export default Product;