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

// создаём тестовую версию компонента
const component = renderer.create(
	<MobileCompany clients={clients} />
);

// получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
let componentTree = component.toJSON();

beforeAll(() => {
	expect(componentTree).toMatchSnapshot();
});

describe('работа кнопки "Добавить клиента" для добавления нового клиента в список "доступных" клиентов компании', () => {
	// найдём в вёрстке компонента кнопку "Добавить клиента"
	const addNewClientBtn = component.root.find( el => el.props.value === 'Добавить клиента' );

	test('добавить нового клиента', () => {
		// нажимаем на кнопку "Добавить клиента"
		ReactTestUtils.Simulate.click(addNewClientBtn);

		// получаем изменённый снэпшот
		componentTree = component.toJSON();
		expect(componentTree).toMatchSnapshot('addNewClientButton.test.js.snap');
	});

	test('добавить еще одного нового клиента', () => {
		// нажимаем на кнопку "Добавить клиента" повторно
		ReactTestUtils.Simulate.click(addNewClientBtn);

		// получаем снова изменённый снэпшот
		componentTree = component.toJSON();
		expect(componentTree).toMatchSnapshot('addNewClientButton.test.js.snap');
	});
});