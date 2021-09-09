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

describe('работа кнопки "Заблокированные" для фильтрации клиентов компании в случае дефолтного/нефильтрованного состояния списка', () => {
	beforeAll(() => {
		expect(componentTree).toMatchSnapshot('filterBlockedClientsButton.test.js.snap');
	});

	// найдём в вёрстке компонента кнопку "Заблокированные"
	const blockedClientsBtn = component.root.find( el => el.props.value === 'Заблокированные' );

	test('показать всех "заблокированных" клиентов при первом нажатии на кнопку', () => {
		// нажимаем на кнопку "Заблокированные"
		ReactTestUtils.Simulate.click(blockedClientsBtn);

		// получаем изменённый снэпшот
		componentTree = component.toJSON();
		expect(componentTree).toMatchSnapshot('filterBlockedClientsButton.test.js.snap');
	});

	test('показать всех "заблокированных" клиентов при повторном нажатии на кнопку', () => {
		// нажимаем на кнопку "Заблокированные" повторно
		ReactTestUtils.Simulate.click(blockedClientsBtn);

		// получаем снова изменённый снэпшот
		componentTree = component.toJSON();
		expect(componentTree).toMatchSnapshot('filterBlockedClientsButton.test.js.snap');
	});
});

describe('работа кнопки "Заблокированные" для фильтрации клиентов компании в случае модифицированного/фильтрованного состояния списка', () => {
	beforeAll(() => {
		// найдём в вёрстке компонента кнопку "Активные"
		const activeClientsBtn = component.root.find( el => el.props.value === 'Активные' );

		// нажимаем на кнопку "Активные"
		ReactTestUtils.Simulate.click(activeClientsBtn);

		// получаем изменённый снэпшот
		componentTree=component.toJSON();
		expect(componentTree).toMatchSnapshot('filterActiveClientsButton.test.js.snap');
	});

	// найдём в вёрстке компонента кнопку "Заблокированные"
	const blockedClientsBtn = component.root.find( el => el.props.value === 'Заблокированные' );

	test('показать всех "заблокированных" клиентов при первом нажатии на кнопку', () => {
		// нажимаем на кнопку "Заблокированные"
		ReactTestUtils.Simulate.click(blockedClientsBtn);

		// получаем уже изменённый снэпшот
		componentTree = component.toJSON();
		expect(componentTree).toMatchSnapshot('filterBlockedClientsButton.test.js.snap');
	});

	test('показать всех "заблокированных" клиентов при повторном нажатии на кнопку', () => {
		// нажимаем на кнопку "Заблокированные" повторно
		ReactTestUtils.Simulate.click(blockedClientsBtn);

		// получаем снова изменённый снэпшот
		componentTree = component.toJSON();
		expect(componentTree).toMatchSnapshot('filterBlockedClientsButton.test.js.snap');
	});
});