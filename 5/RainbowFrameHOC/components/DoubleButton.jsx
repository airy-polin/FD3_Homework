import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './DoubleButton.css';

class DoubleButton extends React.Component {
	static propTypes = {
		caption1: PropTypes.string.isRequired,
		caption2: PropTypes.string.isRequired,
		onClickHandler: PropTypes.func.isRequired,
	}

	onClickHandler = (event) => {
		this.props.onClickHandler(event.target.value, event.target.id)
	}

	render() {
		return (
			<Fragment>
				<input className='DoubleButton' id={1} type='button' value={this.props.caption1} onClick={this.onClickHandler} />
				{ this.props.children }
				<input className='DoubleButton' id={2} type='button' value={this.props.caption2} onClick={this.onClickHandler} />
			</Fragment>
		);
	}
};

export default DoubleButton;