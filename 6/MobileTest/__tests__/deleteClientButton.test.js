'use strict'

import React from 'react';
import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils';

import MobileCompany from '../components/MobileCompany';

const clients = [
	{ id: 111, fullName: { lastName: 'Иванов', firstName: 'Иван', middleName: 'Иванович' }, balance: 200 },
	{ id: 112, fullName: { lastName: 'Сидоров', firstName: 'Сидор', middleName: 'Сидорович' }, balance: 250 },
	{ id: 113, fullName: { lastName: 'Петров', firstName: 'Пётр', middleName: 'Петрович' }, balance: 180 },
	{ id: 114, fullName: { lastName: 'Григориев', firstName: 'Григорий', middleName: 'Григорьевич' }, balance: -220 },
];

describe('работа кнопки "Удалить" для удаления выбранного клиента компании из списка', () => {
	test('удалить клиента', () => {
		for (let buttonIndex = 0; buttonIndex < clients.length; buttonIndex++) {
			// создаём тестовую версию компонента
			const component = renderer.create(
				<MobileCompany clients={clients} />
			);
	
			// получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
			let componentTree = component.toJSON();
	
			// найдём в вёрстке компонента кнопку "Удалить" для выбранного клиента
			const deleteClientBtn = component.root.findAll( el => (el.props.value === 'Удалить')[buttonIndex] );
	
			// нажимаем на кнопку "Удалить"
			ReactTestUtils.Simulate.click(deleteClientBtn);
			
			// получаем изменённый снэпшот
			componentTree = component.toJSON();
			expect(componentTree).toMatchSnapshot('deleteClientButton.test.js.snap');
		}
	});
	
	test('удлать еще одного клиента', () => {
		for (let buttonIndex = 0; buttonIndex < clients.length; buttonIndex++) {
			// создаём тестовую версию компонента
			const component = renderer.create(
				<MobileCompany clients={clients} />
			);
	
			// получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
			let componentTree = component.toJSON();
	
			// найдём в вёрстке компонента кнопку "Удалить" для выбранного клиента
			const deleteClientBtn = component.root.findAll( el => (el.props.value === 'Удалить')[buttonIndex] );
	
			// нажимаем на кнопку "Удалить" повторно
			ReactTestUtils.Simulate.click(deleteClientBtn);
			
			// получаем изменённый снэпшот
			componentTree = component.toJSON();
			expect(componentTree).toMatchSnapshot('deleteClientButton.test.js.snap');
		}
	});
});