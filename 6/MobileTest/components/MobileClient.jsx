import React from 'react';
import PropTypes from 'prop-types';

import './MobileClient.css';

import Button from './Button.jsx';
import { myEvents } from "./events.js";

class MobileClient extends React.PureComponent {
	static propTypes = {
		client: PropTypes.shape({
			id: PropTypes.number.isRequired,
			fullName: PropTypes.shape({
				lastName: PropTypes.string.isRequired,
				firstName: PropTypes.string.isRequired,
				middleName: PropTypes.string.isRequired,
			}),
			balance: PropTypes.number.isRequired,
		})
	};

	editClient = (EO) => {
		let formMode = 1;
		// 0 - initial state (no mode); 1 - edit client mode; 2 - add new client mode (useless in this module)

		myEvents.emit('EEditClient', this.props.client.id, formMode, EO);
	};

	deleteClient = (EO) => {
		myEvents.emit('EDeleteClient', this.props.client.id, EO);
	};

	render() {
		console.log(`MobileClient ID: ${this.props.client.id} rendered`);

		let isActive = this.props.client.balance > 0;

		return (
			<tr className='TableLine'>
				<td>
					<span>{this.props.client.fullName.lastName}</span>
				</td>
				<td>
					<span>{this.props.client.fullName.firstName}</span>
				</td>
				<td>
					<span>{this.props.client.fullName.middleName}</span>
				</td>
				<td>
					<span>{this.props.client.balance}</span>
				</td>
				<td style={{ backgroundColor: isActive ? 'lightgreen' : 'red' }}>
					{ isActive ? 'Active' : 'Blocked' }
				</td>
				<td onClick={this.editClient} >
					<Button value='Редактировать' />
				</td>
				<td onClick={this.deleteClient}>
					<Button value='Удалить' />
				</td>
			</tr>
		);
	}
}

export default MobileClient;