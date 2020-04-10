import React from 'react';
import ToDoList from './ToDoList';

import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter() });


describe('<ToDoList />', () => {
  let wrapper: Enzyme.ShallowWrapper;
  let toDoListComponent: Enzyme.ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<ToDoList items={[]} />);
    toDoListComponent = wrapper.find(`[data-test="component-to-do-list"]`)
  });

  it('renders without error', () => {
    expect(toDoListComponent).toHaveLength(1);
  });
});
