'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';

import RainbowFrame from './components/RainbowFrame.jsx';

const colors = [
	'red',
	'orange',
	'yellow',
	'green',
	'skyblue',
	'blue',
	'purple',
];

ReactDOM.render(
	<RainbowFrame colors={colors}>
		Hello!
	</RainbowFrame>, document.getElementById('container')
);