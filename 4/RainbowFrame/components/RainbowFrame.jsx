import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrame.css';

class RainbowFrame extends React.Component {
	static propTypes = {
		colors: PropTypes.arrayOf(PropTypes.string).isRequired,
	}

	// v1
	// render() {
	// 	const innerFrames = this.props.colors.slice(1);

	// 	return(
	// 		<div className='RainbowFrame' style={{borderColor: this.props.colors[0]}}>
	// 			{
	// 				innerFrames.length ?
	// 				<RainbowFrame colors={innerFrames}>
	// 					{this.props.children}
	// 				</RainbowFrame> :
	// 				this.props.children
	// 			}
	// 		</div>
	// 	);
	// }

	// v2
	render() {
		const innerFrames = this.props.colors.slice(1).reverse();
		let children = this.props.children;

		innerFrames.forEach(frameColor => {
			children = <div className='RainbowFrame' style={{borderColor: frameColor}}>{children}</div>
		});

		return (
			<div className='RainbowFrame' style={{borderColor: this.props.colors[0]}}>
				{children}
			</div>
		);
	}
};

export default RainbowFrame;