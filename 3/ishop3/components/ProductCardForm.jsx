import React from 'react';
import PropTypes from 'prop-types';

import './ProductCardForm.css';

class ProductCardForm extends React.Component {
	static propTypes = {
		index: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		price: PropTypes.any.isRequired,
		sample: PropTypes.string.isRequired,
		availability: PropTypes.any.isRequired,
		mode: PropTypes.number.isRequired,
	};

	state = {
		index: this.props.index,
		name: this.props.name,
		price: this.props.price,
		sample: this.props.sample,
		availability: this.props.availability,
		mode: this.props.mode,
		invalid: (this.props.mode === 1) ? false : true, // false - success validation, true - failed validation
	};

	processCard() {
		const result = {
			name: this.state.name,
			code: this.state.index,
			price: this.state.price,
			sample: this.state.sample,
			availability: this.state.availability,
		};

		return result;
	};

	editInputVal = (event) => {
		let key = event.target.id,
			newVal = (key === 'price' || key === 'availability') ? Number(event.target.value) : event.target.value,
			updatedState = {};
		
		updatedState[key] = newVal;
		this.setState(updatedState, this.processCard);

		const inputs = this.processCard();

		for (let input in inputs) {
			if (input === key) {
				inputs[input] = newVal;
				break;
			}
		}

		for (let input in inputs) {
			if (!inputs[input]) {
				this.setState({invalid: true})
				return;
			}
		}

		this.setState({invalid: false});
	};

	handleChangeOnEdit = (event) => {
		const updatedProduct = this.processCard();
		this.props.handleChangeOnEdit(updatedProduct);
	};

	handleChangeOnExtension = (event) => {
		const newProduct = this.processCard();
		this.props.handleChangeOnExtension(newProduct);
	};

	cancelChange = (event) => {
		this.setState({
			name: this.props.name,
			price: this.props.price,
			sample: this.props.sample,
			availability: this.props.availability,
			mode: '',
		});

		let mode = '';
		this.props.cancelChange(mode);
	};

	render() {
		let disabled = this.state.invalid ? true : false;

		return (
			<div className='ProductCardForm'>
				<div className='Title'>{this.props.mode === 1 ? 'Edit Existing Product' : 'Add New Product'}</div>

				<div className='Description' onChange={this.editInputVal}>
					<span>ID: {this.props.index}</span>

					<div className="DescriptionItem">
						<label htmlFor='name'>Name:</label>
						<input type='text' id='name' defaultValue={this.state.name} />
						{
							!this.state.name &&
							<span className='error'>This field cannot be empty</span>
						}
					</div>

					<div className="DescriptionItem">
						<label htmlFor='price'>Price:</label>
						<input type='text' id='price' defaultValue={this.state.price} />
						{
							!this.state.price &&
							<span className='error'>This field cannot be empty</span>
						}
					</div>

					<div className="DescriptionItem">
						<label htmlFor='sample'>Product sample:</label>
						<input type='text' id='sample' defaultValue={this.state.sample} />
						{
							!this.state.sample &&
							<span className='error'>This field cannot be empty</span>
						}
					</div>

					<div className="DescriptionItem">
						<label htmlFor='availability'>Available pieces:</label>
						<input type='text' id='availability' defaultValue={this.state.availability} />
						{
							!this.state.availability &&
							<span className='error'>This field cannot be empty</span>
						}
					</div>
				</div>

				<div className='Buttons'>
					<input className='Cancel' type='button' value='cancel' onClick={this.cancelChange} />
					<input className='Save' type='button' value='save' disabled={disabled} onClick={this.props.mode === 1 ? this.handleChangeOnEdit : this.handleChangeOnExtension} />
				</div>
			</div>
		);
	};
};

export default ProductCardForm;