let ProductsList = React.createClass({
	displayName: 'ProductsList',

	render: function() {
		const productCodes = [];

		let priceEnding = ' USD per item',
			availabilityEnding = ' pieces available';

		this.props.products.forEach(product => {
			let productCode = 
			  React.DOM.div({key: product.code, className: 'Product'},
				React.DOM.div({className: 'Media'},
				  React.DOM.img({className: null, src: product.sample})
				),
				React.DOM.div({className: 'Info'},
					React.DOM.div({className: 'Title'}, product.name),
					React.DOM.div({className: 'Price'},
						React.DOM.span({className: 'Amount'}, product.price),
						priceEnding
					),
					React.DOM.div({className: 'Quantity'},
						React.DOM.span({className: 'Number'}, product.availability),
						availabilityEnding
					),
				),
			);
			
			productCodes.push(productCode);
		});

		return (
			React.DOM.div({className: 'ProductsList'},
			React.DOM.div({className: 'Name'}, this.props.name),
			React.DOM.div({className: 'Products'}, productCodes),
		));
	},
});