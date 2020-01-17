import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('expect to render CardList component', () => {
	const mockrobots = [
		{
			id: 1,
			name:"john snow",
			username: "johnjohn",
			email:"johnsnow@gmail.com"
		}
	]
	expect(shallow(<CardList robots={mockrobots}/>)).toMatchSnapshot();
})

