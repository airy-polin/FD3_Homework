let ScrollingList = React.createClass({
	displayName: 'ScrollingList',

	propTypes: {
		list: React.PropTypes.arrayOf(React.PropTypes.string),
	},

	getInitialState: function() {
		return {
			sorted: 0, // 0 - OFF, 1 - ON
			filterValue: '',
			data: this.props.list.map((item, count = 0) => {
				count++;
				return {name: item, code: count};
			}),
		};
	},

	toggleSorting: function() {
		if (this.state.sorted === 0) {
			const sortedArr = this.state.data
				.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);

			this.setState({data: sortedArr});
			this.setState({sorted: 1});
		} else {
			this.resetDBToDefault();
			this.setState({sorted: 0});
		}
	},

	filterList: function(event) {
		let value = event.target.value;
		this.setState({filterValue: value});

		if (value !== '') {
			const filteredArr = this.state.data
				.filter(elem => elem.name.toLowerCase().includes(value));

			this.setState({data: filteredArr});
		} else {
			this.resetDBToDefault();
		}
	},

	resetDBToDefault: function() {
		this.setState({
			data: this.props.list.map((item, count = 0) => {
				count++;
				return {name: item, code: count};
			}),
		});
	},

	resetAllSettings: function() {
		this.setState({sorted: 0});
		this.setState({filterValue: ''});
		this.resetDBToDefault();
	},

	render: function() {
		const novels = this.state.data
			.map(novel => React.DOM.option({className: 'Novel', key: novel.code}, novel.name));

		return (
			React.DOM.div({className: 'NovelsList'},
			React.DOM.div({className: 'ControlPanel'},
				React.DOM.input({className: null, type: 'checkbox', checked: this.state.sorted, onChange: this.toggleSorting}),
				React.DOM.input({className: null, type: 'text', value: this.state.filterValue, onChange: this.filterList}),
				React.DOM.input({className: null, type: 'button', value: 'reset', onClick: this.resetAllSettings}),
			),
			React.DOM.select({className: 'Novels', size: 5}, novels),
		));
	},
});