'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';

import ProductsList from './components/ProductsList.jsx';

let productsArr = require('./products.json');

ReactDOM.render(
	<ProductsList
		products={productsArr}
	/>
	, document.getElementById('container')
);