import React from 'react';

import './withRainbowFrame.css';

const withRainbowFrame = colors => MyComponent => props => {
	let frame = <MyComponent {...props} />;
	
	colors.forEach(color => {
		frame = <div className='RainbowFrame' style={{ borderColor: color }}>
			{ frame }
		</div>
	});
	
	return frame;
}

export default withRainbowFrame;