'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';

import MobileCompanyA1 from './components/MobileCompany.jsx';

const clients = [
	{ id: 111, fullName: { lastName: 'Иванов', firstName: 'Иван', middleName: 'Иванович' }, balance: 200 },
	{ id: 112, fullName: { lastName: 'Сидоров', firstName: 'Сидор', middleName: 'Сидорович' }, balance: 250 },
	{ id: 113, fullName: { lastName: 'Петров', firstName: 'Пётр', middleName: 'Петрович' }, balance: 180 },
	{ id: 114, fullName: { lastName: 'Григориев', firstName: 'Григорий', middleName: 'Григорьевич' }, balance: -220 },
];

ReactDOM.render(
	<div className='App'>
		<MobileCompanyA1
			clients={clients}
		/>
	</div>, document.getElementById('container')
);