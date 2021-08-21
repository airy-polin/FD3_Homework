// import React from 'react';
// import PropTypes from 'prop-types';

// import './TextSquare.css';

// const TextSquare = (props) => {

// 	return (
// 		<div className='TextSquare'>
// 			{ this.props.children }
// 		</div>
// 	);
// };

// export default TextSquare;



import React from 'react';
import PropTypes from 'prop-types';

import './TextSquare.css';

class TextSquare extends React.Component {
	static propTypes = {
		text: PropTypes.string.isRequired,
	}

	render() {
		let regexp = /<br\s?\/?>/ig,
			counter = 1;

		const arr = this.props.text.split(regexp),
			result = [];

		arr.map((elem) => {
			result.push(<span key={counter}>{elem}</span>, <br className='hidden' key={++counter} />)
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