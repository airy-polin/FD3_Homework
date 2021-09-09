import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './DataEditingForm.css';

// import Button from './Button.jsx';
import { myEvents } from "./events"

class DataEditingForm extends React.PureComponent {
	static propTypes = {
		formMode: PropTypes.number.isRequired, // 1 - edit client mode; 2 - add client mode
		client: PropTypes.shape({
			id: PropTypes.number.isRequired,
			fullName: PropTypes.shape({
				lastName: PropTypes.string.isRequired,
				firstName: PropTypes.string.isRequired,
				middleName: PropTypes.string.isRequired,
			}),
			balance: PropTypes.number.isRequired,
		}),
		newClientID: PropTypes.number,
	};

	newLastNameRef = null;
	newFirstNameRef = null;
	newMiddleNameRef = null;
	newBalanceRef = null;

	setNewLastNameRef = (ref)=> {
		this.newLastNameRef = ref;
	};

	setNewFirstNameRef = (ref) => {
		this.newFirstNameRef = ref;
	};

	setNewMiddleNameRef = (ref) => {
		this.newMiddleNameRef = ref;
	};

	setNewBalanceRef = (ref) => {
		this.newBalanceRef = ref;
	};

	cancelChanges = (EO) => {
		myEvents.emit('ECancelChanges', EO)
	};

	saveChanges = () => {
		if (this.props.formMode === 1) {
			let client = this.props.client;
			if (this.newLastNameRef.value !== client.fullName.lastName || this.newFirstNameRef.value !== client.fullName.firstName || this.newMiddleNameRef.value !== client.fullName.middleName || parseInt(this.newBalanceRef.value) !== client.balance) {
				client = {
					balance: parseInt(this.newBalanceRef.value),
					fullName: {
						lastName: this.newLastNameRef.value,
						firstName: this.newFirstNameRef.value,
						middleName: this.newMiddleNameRef.value,
					},
				};
				client.id = this.props.client.id;
			}
			myEvents.emit('ESaveChanges', client);
		}
		if (this.props.formMode === 2) {
			const client = {
				balance: parseInt(this.newBalanceRef.value),
				fullName: {
					lastName: this.newLastNameRef.value,
					firstName: this.newFirstNameRef.value,
					middleName: this.newMiddleNameRef.value,
				},
			};
			client.id = this.props.newClientID;
			myEvents.emit('EAddNewClient', client);
		}
	};

	render() {
		console.log('DataEditingForm rendered');

		if (this.props.formMode === 1) {
			return (
				<div className='DataEditForm'>
					<label>
						Фамилия:
						<input type='text' defaultValue={this.props.client.fullName.lastName} ref={this.setNewLastNameRef} minLength={2} maxLength={12} required />
					</label>
					<label>
						Имя:
						<input type='text' defaultValue={this.props.client.fullName.firstName} ref={this.setNewFirstNameRef} minLength={2} maxLength={12} required />
					</label>
					<label>
						Отчество:
						<input type='text' defaultValue={this.props.client.fullName.middleName} ref={this.setNewMiddleNameRef} minLength={2} maxLength={12} required />
					</label>
					<label>
						Баланс:
						<input type='text' defaultValue={this.props.client.balance} ref={this.setNewBalanceRef} minLength={1} maxLength={5} required />
					</label>
					<div className='Buttons'>
						<Button value='×' handler={this.cancelChanges} className='CancelButton' />
						<Button value='✓' handler={this.saveChanges} className='SaveButton' />
						{/* <input className='CancelButton' type='button' value='×' onClick={this.cancelChanges} />
						<input className='SaveButton' type='button' value='✓' onClick={this.saveChanges} /> */}
					</div>
				</div>
			);
		} else if (this.props.formMode === 2) {
			return (
				<div className='DataEditForm'>
					<label>
						Фамилия:
						<input type='text' ref={this.setNewLastNameRef} minLength={2} maxLength={12} required />
					</label>
					<label>
						Имя:
						<input type='text' ref={this.setNewFirstNameRef} minLength={2} maxLength={12} required />
					</label>
					<label>
						Отчество:
						<input type='text' ref={this.setNewMiddleNameRef} minLength={2} maxLength={12} required />
					</label>
					<label>
						Баланс:
						<input type='text' ref={this.setNewBalanceRef} minLength={1} maxLength={5} required />
					</label>
					<div className='Buttons'>
						<input className='CancelButton' type='button' value='×' onClick={this.cancelChanges} />
						<input className='SaveButton' type='button' value='✓' onClick={this.saveChanges} />
					</div>
				</div>
			);
		}
	}
}

export default DataEditingForm;