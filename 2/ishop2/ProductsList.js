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
			products: this.props.products.map(product => product.name),
		}
	},

	highlightProduct: function(event) {
		event.current.Target
	},

	deleteProduct: function(index) {
		if (confirm('want to delete this product from the list?')) {
			let arrOfProducts = this.state.products;
			arrOfProducts.splice(index, 1);
			this.setState({products: arrOfProducts});
		}
	},

	render: function() {
		const productCodes = this.props.products.map(p => 
			React.createElement(Product, {
				key: p.code,
				index: p.code,
				name: p.name,
				price: p.price, 
				sample: p.sample,
				availability: p.availability,
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