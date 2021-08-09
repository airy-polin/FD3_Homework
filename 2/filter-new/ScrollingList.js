let ScrollingList = React.createClass({
	displayName: 'ScrollingList',

	propTypes: {
		list: React.PropTypes.arrayOf(React.PropTypes.string),
	},

	getInitialState: function() {
		return {
			sorted: false,
			filterValue: '',
			processedList: this.props.list,
		};
	},

	toggleSorting(event) {
		this.setState({sorted: event.target.checked}, this.processList);
	},

	filterList(event) {
		this.setState({filterValue: event.target.value}, this.processList);
	},

	processList() {
		let result = this.props.list.slice();

		if (this.state.filterValue !== '') {
			result = result.filter(novel => novel.toLowerCase().includes(this.state.filterValue));
		}

		if (this.state.sorted) {
			result.sort();
		}

		this.setState({processedList: result});
	},

	resetSettings() {
		this.setState({
			sorted: false,
			filterValue: '',
			processedList: this.props.list,
		});
	},

	render: function() {
		const novels = this.state.processedList
			.map((novel, index) => React.DOM.option({className: 'Novel', key: index}, novel));

		return (
			React.DOM.div({className: 'NovelsList'},
			React.DOM.div({className: 'ControlPanel'},
				React.DOM.input({className: null, type: 'checkbox', checked: this.state.sorted, onChange: this.toggleSorting}),
				React.DOM.input({className: null, type: 'text', value: this.state.filterValue, onChange: this.filterList}),
				React.DOM.input({className: null, type: 'button', value: 'reset', onClick: this.resetSettings}),
			),
			React.DOM.select({className: 'Novels', size: 5}, novels),
		));
	},
});