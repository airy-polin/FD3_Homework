let ProductsList = React.createClass({
	displayName: 'ProductsList',

	propTypes: {
		name: React.PropTypes.string,
		products: React.PropTypes.arrayOf(
			React.PropTypes.shape({
				name: React.PropTypes.string.isRequired,
				code: React.PropTypes.number.isRequired,
				price: React.PropTypes.number.isRequired,
				sample: React.PropTypes.string.isRequired,
				availability: React.PropTypes.number.isRequired,
			})
		),
	},

	getInitialState: function() {
		return {
			products: this.props.products,
			checkedProduct: '',
		}
	},

	highlightProduct: function(index) {
		this.state.checkedProduct === index ? this.setState({checkedProduct: ''}) : this.setState({checkedProduct: index});
	},

	deleteProduct: function(index) {
		if (confirm('want to delete this product from the list?')) {
			const updatedProducstsList = this.state.products
				.filter(product => product.code !== index);
		
			this.setState({products: updatedProducstsList});
		}
	},

	render: function() {
		let checkedProduct = this.state.checkedProduct;

		const productCodes = this.state.products
			.map(p => 
				React.createElement(Product, {
					key: p.code,
					index: p.code,
					name: p.name,
					price: p.price, 
					sample: p.sample,
					availability: p.availability,
					checked: checkedProduct,
					highlightProduct: index => this.highlightProduct(index),
					deleteProduct: index => this.deleteProduct(index),
				})
			);

		return (
			React.DOM.div({className: 'ProductsList'},
			React.DOM.div({className: 'Name'}, this.props.name),
			React.DOM.div({className: 'Products'}, productCodes),
		));
	},
});