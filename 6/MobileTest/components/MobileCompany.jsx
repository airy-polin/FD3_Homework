import React, { Fragment } from "react";
import PropTypes from 'prop-types';

import './MobileCompany.css';

import Button from "./Button.jsx";
import MobileClient from "./MobileClient.jsx";
import DataEditingForm from "./DataEditingForm.jsx";
import { myEvents } from "./events";

class MobileCompanyA1 extends React.PureComponent {
	static propTypes = {
		clients: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.number.isRequired,
				fullName: PropTypes.shape({
					lastName: PropTypes.string.isRequired,
					firstName: PropTypes.string.isRequired,
					middleName: PropTypes.string.isRequired,
				}),
				balance: PropTypes.number.isRequired,
			})
		),
	};

	state = {
		clients: this.props.clients,
		filterMode: 0, // 0 - non-filtered list; 1 - active clients; 2 - blocked clients
		formMode: 0, // 0 - initial state (no mode); 1 - edit client mode; 2 - add new client mode
		editableClientID: null,
	};

	componentDidMount = () => {
		myEvents.addListener('EEditClient', this.editClient);
		myEvents.addListener('EDeleteClient', this.deleteClient);
		myEvents.addListener('ECancelChanges', this.cancelChanges);
		myEvents.addListener('ESaveChanges', this.saveChanges);
		myEvents.addListener('EAddNewClient', this.addNewClient);
	};

	componentWillUnmount = () => {
		myEvents.removeListener('EEditClient', this.editClient);
		myEvents.removeListener('EDeleteClient', this.deleteClient);
		myEvents.removeListener('ECancelChanges', this.cancelChanges);
		myEvents.removeListener('ESaveChanges', this.saveChanges);
		myEvents.removeListener('EAddNewClient', this.addNewClient);
	};

	filterActiveClients = () => {
		this.setState({
			filterMode: 1,
		});
	};

	filterBlockedClients = () => {
		this.setState({
			filterMode: 2,
		});
	};

	resetFilter = () => {
		this.setState({
			filterMode: 0,
		});
	};

	fitFilterHandler = (event) => {
		let clickedButton = event.target.innerText;

		if (clickedButton === 'Все') {
			this.resetFilter();
		}
		if (clickedButton === 'Активные') {
			this.filterActiveClients();
		}
		if (clickedButton === 'Заблокированные') {
			this.filterBlockedClients();
		}
	};

	addForm = () => {
		this.setState({
			formMode: 2,
		});
	};

	editClient = (id, newFormMode) => {
		this.setState({
			formMode: newFormMode,
			editableClientID: id,
		});
	};

	cancelChanges = () => {
		this.setState({
			formMode: 0,
		});
	};

	saveChanges = (editedClient) => {
		const allClients = this.state.clients;

		let editedClientIndex = allClients.findIndex(client => client.id === editedClient.id);
		const oldClient = this.state.clients[editedClientIndex];

		if (oldClient !== editedClient) {
			allClients.splice(editedClientIndex, 1, editedClient);
	
			this.setState({
				clients: allClients,
				formMode: 0,
			});
		} else {
			this.setState({
				formMode: 0,
			});
		}
	};

	deleteClient = (id, EO) => {
		console.log(EO.value);

		if (confirm(`Хотите удалить клиента ID ${id}?`)) {
			const allClients = this.state.clients.slice();
			const updatedClients = allClients.filter(client => client.id !== id);

			this.setState({
				clients: updatedClients,
			});
		}
	};

	addNewClient = (newClient) => {
		const allClients = this.state.clients.slice();
		allClients.push(newClient);

		this.setState({
			clients: allClients,
			formMode: 0,
		});
	};

	render() {
		console.log('MobileCompany rendered');

		let clientsToRender;
		const allClients = this.state.clients.slice();

		let newClientID = this.state.clients[this.state.clients.length - 1].id + 1;
		let editableClientIndex = allClients.findIndex(client => client.id === this.state.editableClientID);
		const editableClient = allClients[editableClientIndex];

		if (this.state.filterMode === 0) {
			clientsToRender = allClients;
		} else if (this.state.filterMode === 1) {
			clientsToRender = allClients.filter(client => client.balance >= 0);
		} else if (this.state.filterMode === 2) {
			clientsToRender = allClients.filter(client => client.balance < 0)
		}

		const clients = clientsToRender.map(client => 
			<MobileClient key={client.id} client={client} />
		);

		return (
			<Fragment>
				<div className='MobileCompany'>
					<div className='TableFilter'>
						<Button value='Все' handler={this.resetFilter} />
						<Button value='Активные' handler={this.filterActiveClients} />
						<Button value='Заблокированные' handler={this.filterBlockedClients} />
					</div>

					<div className='TableData'>
						<table>
							<thead>
								<tr className='TableHeader'>
									<th>Фамилия</th>
									<th>Имя</th>
									<th>Отчество</th>
									<th>Баланс</th>
									<th>Статус</th>
									<th>Редактировать</th>
									<th>Удалить</th>
								</tr>
							</thead>

							<tbody>
								{ clients }
							</tbody>
						</table>
					</div>

					<div className='TableEditor' onClick={this.addForm}>
						<Button value='Добавить клиента' />
					</div>
				</div>
				{
					(this.state.formMode === 1 || this.state.formMode === 2) &&
					<DataEditingForm
						formMode={this.state.formMode}
						newClientID={newClientID}
						client={editableClient}
					/>
				}
			</Fragment>
		);
	}
}

export default MobileCompanyA1;