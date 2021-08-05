let Product = React.createClass({
	displayName: 'Product',

	propTypes: {
		index: React.PropTypes.number.isRequired,
		name: React.PropTypes.string.isRequired,
		price: React.PropTypes.number.isRequired,
		sample: React.PropTypes.string.isRequired,
		availability: React.PropTypes.number.isRequired,
		checked: React.PropTypes.bool,
	},

	highlightProduct: function(event) {
		event.stopPropagation();
		this.props.highlightProduct(this.props.index);
	},

	deleteProduct: function(event) {
		event.stopPropagation();
		this.props.deleteProduct(this.props.index);
	},

	render: function() {
		let priceEnding = ' USD per item',
			availabilityEnding = ' pieces available';

		return (
			React.DOM.div({className: `Product ${this.props.checked ? 'checked' : ''}`, id: this.props.index, onClick: this.highlightProduct},
				React.DOM.div({className: 'Media'},
					React.DOM.img({className: null, src: this.props.sample})
				),
				React.DOM.div({className: 'Info'},
					React.DOM.div({className: 'Title'}, this.props.name),
					React.DOM.div({className: 'Price'},
						React.DOM.span({className: 'Amount'}, this.props.price),
						priceEnding
					),
					React.DOM.div({className: 'Quantity'},
						React.DOM.span({className: 'Number'}, this.props.availability),
						availabilityEnding
					),
					React.DOM.div({className: 'Button'},
						React.DOM.input({className: null, type: 'button', value: 'delete me', onClick: this.deleteProduct})),
				),
			)
		);
	},
});