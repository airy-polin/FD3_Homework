import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './ProductsList.css';

import Product from './Product.jsx';
import ProductCardView from './ProductCardView.jsx';
import ProductCardForm from './ProductCardForm.jsx';

class ProductsList extends React.Component {
	static propTypes = {
		name: PropTypes.string,
		products: PropTypes.arrayOf(
			PropTypes.shape({
				name: PropTypes.string.isRequired,
				code: PropTypes.number.isRequired,
				price: PropTypes.number.isRequired,
				sample: PropTypes.string.isRequired,
				availability: PropTypes.number.isRequired,
			})
		),
	};

	state = {
		products: this.props.products,
		checkedProduct: '',
		mode: '', // 1 - edit existing product mode, 2 - add new product mode
		isEditable: 1, // 1- open, 2 - frozen
	};

	highlightProduct = (index) => {
		this.state.checkedProduct === index ? this.setState({checkedProduct: ''}) : this.setState({checkedProduct: index});
	};

	deleteProduct = (index) => {
		if (confirm('want to delete this product from the list?')) {
			const updatedProducstsList = this.state.products
				.filter(product => product.code !== index);
		
			this.setState({products: updatedProducstsList});
		}
	};

	editProduct = (index) => {
		this.setState({
			checkedProduct: index,
			mode: 1,
			isEditable: 2,
		});
	};

	handleChangeOnEdit = (product) => {
		const updatedProductIndex = this.state.products
			.findIndex(p => p.code === product.code);
		
		const result = this.state.products.slice();
		result.splice(updatedProductIndex, 1, product);
		
		this.setState({
			products: result,
			checkedProduct: '', // removes selection from the edited card
			mode: '',
			isEditable: 1,
		});
	};

	addProduct = (event) => {
		this.setState({
			mode: 2,
			isEditable: 2,
		});
	};

	handleChangeOnExtension = (newProduct) => {
		const result = this.state.products.slice();
		result.push(newProduct);

		this.setState({
			products: result,
			checkedProduct: '', // removes selection from the edited card
			mode: '',
			isEditable: 1,
		});
	};

	cancelChange = (mode) => {
		this.setState({
			mode: mode,
			checkedProduct: '', // removes selection from the edited card
			isEditable: 1,
		});
	};

	render() {
		let checkedProduct = this.state.checkedProduct; // code

		const productCodes = this.state.products
			.map(p => 
				<Product
					key={p.code}
					index={p.code}
					name={p.name}
					price={p.price}
					sample={p.sample}
					availability={p.availability}
					checked={checkedProduct}
					isEditable={this.state.isEditable}
					highlightProduct={index => this.highlightProduct(index)}
					deleteProduct={index => this.deleteProduct(index)}
					editProduct={index => this.editProduct(index)}
				/>
			);
		
		const clickedProduct = this.state.products
			.find(p => p.code === checkedProduct);

		let lastCodeValue = this.state.products[this.state.products.length - 1].code;

		let disabled = (this.state.isEditable === 2) ? true : false;

		return (
			<div className='ProductsList'>
				<div className='Name'>{this.props.name}</div>
				<div className='Products'>{productCodes}</div>
				<div className='Button'>
					<input className='Add' type='button' value='Add New Product' disabled={disabled} onClick={this.addProduct} />
				</div>
				{
					clickedProduct && this.state.mode === '' &&
					<ProductCardView
						index={clickedProduct.code}
						name={clickedProduct.name}
						price={clickedProduct.price}
						availability={clickedProduct.availability}
					/>
				}
				{
					clickedProduct && this.state.mode === 1 &&
					<ProductCardForm
						index={clickedProduct.code}
						name={clickedProduct.name}
						price={clickedProduct.price}
						sample={clickedProduct.sample}
						availability={clickedProduct.availability}
						mode={this.state.mode}
						handleChangeOnEdit={product => this.handleChangeOnEdit(product)}
						cancelChange={mode => this.cancelChange(mode)}
					/>
				}
				{
					this.state.mode === 2 &&
					<ProductCardForm
						index={lastCodeValue + 1}
						name=''
						price={0}
						sample=''
						availability={0}
						mode={this.state.mode}
						handleChangeOnExtension={newProduct => this.handleChangeOnExtension(newProduct)}
						cancelChange={mode => this.cancelChange(mode)}
					/>
				}
			</div>
		);
	};
};

export default ProductsList;