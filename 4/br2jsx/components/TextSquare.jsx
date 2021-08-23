import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './TextSquare.css';

class TextSquare extends React.Component {
	static propTypes = {
		text: PropTypes.string.isRequired,
	}

	render() {
		let regexp = /<br\s?\/?>/ig,
			counter = 0;

		const arr = this.props.text.split(regexp),
			result = [];

		arr.map((elem, index) => {
			if (index) result.push(<br key={counter} />)
			result.push(<Fragment key={++counter}>{elem}</Fragment>)
			counter++;
		});

		return(
			<div className='TextSquare'>
				{result}
			</div>
		);
	}
};

export default TextSquare;