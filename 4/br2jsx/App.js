'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';

import TextSquare from './components/TextSquare.jsx';

let text = 'one<br />two<br />three<br />hundred';

ReactDOM.render(
	<TextSquare 
		text={text}
	/>
	, document.getElementById('container')
);