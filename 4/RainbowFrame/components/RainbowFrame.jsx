import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrame.css';

class RainbowFrame extends React.Component {
	static propTypes = {
		colors: PropTypes.arrayOf(PropTypes.string).isRequired,
	}

	render() {
		const innerFrames = this.props.colors.slice(1);

		return(
			<div className='RainbowFrame' style={{borderColor: this.props.colors[0]}}>
				{
					innerFrames.length ?
					<RainbowFrame colors={innerFrames}>
						{this.props.children}
					</RainbowFrame> :
					this.props.children
				}
			</div>
		);
	}
};

export default RainbowFrame;