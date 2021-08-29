'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';

import withRainbowFrame from './hocs/withRainbowFrame.jsx';
import DoubleButton from './components/DoubleButton.jsx';

const colors = [
	'red',
	'orange',
	'yellow',
	'green',
	'skyblue',
	'blue',
	'purple',
];

const FramedDoubleButton = withRainbowFrame(colors)(DoubleButton);

ReactDOM.render(
	<FramedDoubleButton caption1='я из лесу' caption2='мороз' onClickHandler={(captionText, id) => console.log(`caption text placed on button #${id} is '${captionText}'`)}>
		вышел, был сильный мороз
	</FramedDoubleButton>, document.getElementById('container')
);