import React from 'react';

import './Button.css';

const Button = (props) => {
	return (
		<div className='Button'>
			<button type='button'>{props.value}</button>
		</div>
	);
}

export default Button;