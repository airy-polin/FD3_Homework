let ScrollingList = React.createClass({
	displayName: 'ScrollingList',

	propTypes: {
		list: React.PropTypes.arrayOf(React.PropTypes.string),
	},

	getInitialState: function() {
		return {
			filterValue: '',
			sorted: false, // false - unsorted, true - sorted
			data: this.props.list.map((item, count = 0) => {
				count++;
				return {name: item, code: count};
			}),
		};
	},

	readFilterValue: function(event) {
		// console.log(event.target.value);
		this.setState(prevState => ({
			filterValue: event.target.value,
		}));
	},

	toggleSorting: function(event) {
		this.setState(prevState => ({
			sorted: !prevState.sorted,
		}));
	},

	render: function() {
		let novels = this.state.data
			.filter(novel => novel.name.includes(this.state.filterValue))
			.map(novel => React.DOM.option({className: 'Novel', key: novel.code}, novel.name));

		if (this.state.sorted) {
			novels = novels.sort();
		}

		return (
			React.DOM.div({className: 'NovelsList'},
			React.DOM.div({className: 'ControlPanel'},
				React.DOM.input({className: null, type: 'checkbox', defaultChecked: false, onChange: this.toggleSorting}),
				React.DOM.input({className: null, type: 'text', value: this.state.filterValue, onChange: this.readFilterValue}),
				React.DOM.input({className: null, type: 'button', value: 'reset'}),
			),
			React.DOM.select({className: 'Novels', size: 5}, novels),
		));
	},
});