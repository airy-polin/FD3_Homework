// V1
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

describe('работа кнопки "Редактировать" для редактировании карточки выбранного клиента компании из списка', () => {
	test('редактировать клиента', () => {
		for (let buttonIndex = 0; buttonIndex < clients.length; buttonIndex++) {
			// создаём тестовую версию компонента
			const component = renderer.create(
				<MobileCompany clients={clients} />
			);
	
			// получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
			let componentTree = component.toJSON();
	
			// найдём в вёрстке компонента кнопку "Редактировать" для выбранного клиента
			const editClientBtn = component.root.findAll( el => (el.props.value === 'Редактировать')[buttonIndex] );
	
			// нажимаем на кнопку "Редактировать"
			ReactTestUtils.Simulate.click(editClientBtn);
			
			// получаем изменённый снэпшот
			componentTree = component.toJSON();
			expect(componentTree).toMatchSnapshot('editClientButton.test.js.snap');
		}
	});
	
	test('редактировать еще одного клиента', () => {
		for (let buttonIndex = 0; buttonIndex < clients.length; buttonIndex++) {
			// создаём тестовую версию компонента
			const component = renderer.create(
				<MobileCompany clients={clients} />
			);
	
			// получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
			let componentTree = component.toJSON();
	
			// найдём в вёрстке компонента кнопку "Редактировать" для выбранного клиента
			const editClientBtn = component.root.findAll( el => (el.props.value === 'Редактировать')[buttonIndex] );
	
			// нажимаем на кнопку "Редактировать" повторно
			ReactTestUtils.Simulate.click(editClientBtn);
			
			// получаем изменённый снэпшот
			componentTree = component.toJSON();
			expect(componentTree).toMatchSnapshot('editClientButton.test.js.snap');
		}
	});
});



// V2
// 'use strict'

// import React from 'react';
// import renderer from 'react-test-renderer';
// import ReactTestUtils from 'react-dom/test-utils';

// import MobileCompany from '../components/MobileCompany';

// const clients = [
// 	{ id: 111, fullName: { lastName: 'Иванов', firstName: 'Иван', middleName: 'Иванович' }, balance: 200 },
// 	{ id: 112, fullName: { lastName: 'Сидоров', firstName: 'Сидор', middleName: 'Сидорович' }, balance: 250 },
// 	{ id: 113, fullName: { lastName: 'Петров', firstName: 'Пётр', middleName: 'Петрович' }, balance: 180 },
// 	{ id: 114, fullName: { lastName: 'Григориев', firstName: 'Григорий', middleName: 'Григорьевич' }, balance: -220 },
// ];

// // создаём тестовую версию компонента
// const component = renderer.create(
// 	<MobileCompany clients={clients} />
// );

// // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
// let componentTree = component.toJSON();

// describe('процесс сохранения изменений при редактировании карточки выбранного клиента компании из списка', () => {
// 	test('работа кнопки "Редактировать" для редактирования карточки выбранного клиента компании из списка', () => {
// 		for (let buttonIndex = 0; buttonIndex < clients.length; buttonIndex++) {
// 			// создаём тестовую версию компонента
// 			const component = renderer.create(
// 				<MobileCompany clients={clients} />
// 			);
	
// 			// получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
// 			let componentTree = component.toJSON();
	
// 			// найдём в вёрстке компонента кнопку "Редактировать" для первого клиента
// 			const editClientBtn = component.root.findAll( el => (el.props.value === 'Редактировать')[buttonIndex] );
	
// 			// нажимаем на кнопку "Редактировать"
// 			ReactTestUtils.Simulate.click(editClientBtn);
			
// 			// получаем изменённый снэпшот
// 			componentTree = component.toJSON();
// 			expect(componentTree).toMatchSnapshot(); // форма редактирования карточки клиента активна

// 			const updComponent = renderer.create(
// 				<MobileCompany clients={clients} />
// 			);

// 			// обновить поле карточки редактируемого клиента
// 			const formInputs = updComponent.root.findAll( el => (el.type === 'input') );
// 			let newValue = 'new value';
// 			for (let inputIndex = 0; inputIndex < formInputs.length; inputIndex++) {
// 				formInputs[inputIndex].value = newValue;
// 			}

// 			// найдём в вёрстке компонента кнопку "Сохранить" ("✓")
// 			const saveChangesButton = updComponent.root.find( el => el.type === 'input' && el.props.value === '✓' );

// 			// нажимаем на кнопку "Сохранить" ("✓")
// 			// ReactTestUtils.Simulate.click(saveChangesButton);
// 			saveChangesButton.props.onClick();

// 			// получаем снова изменённый снэпшот
// 			componentTree = updComponent.toJSON();
// 			expect(componentTree).toMatchSnapshot('editClientButton.test.js.snap');
// 		}
// 	});
// });